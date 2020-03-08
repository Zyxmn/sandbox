(ns recipe-search.core
  (:gen-class))

(defn zip-content->map
  "Read a zipfile and return a lazyseq of maps with filename as key and its
  description as value"
  [zipfile]
  (let [z (java.util.zip.ZipFile. zipfile)
        filenames-in-zip (map #(.getName %) (enumeration-seq (.entries z)))
        entries-in-zip (map #(-> z (.getEntry %)) filenames-in-zip)]
    (map #(let [recipe-name (.getName %)
                recipe-description (-> z (.getInputStream %) slurp)]
            {recipe-name recipe-description})
         entries-in-zip)))

(def recipe-list (zip-content->map "resources/recipes.zip"))

(defn search-recipe
  "A simple search that matches the whole phrase with the recipe list
  and returns the top 10 hits (most occurence of given phrase in a recipe's
  description), if there are no hits it returns an empty list"
  [phrase]
  (let [recipe-list (zip-content->map "resources/recipes.zip")]
    (->> (map #(let [recipe-map (-> % first)]
                 {:match-count (count (re-seq (re-pattern (str phrase)) (val recipe-map)))
                  :recipe (key recipe-map)})
              recipe-list)
         (sort-by :match-count)
         (filter #(> (:match-count %) 0))
         reverse
         (take 10))))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println (str args "Hello, World!")))

(comment

  (-main)

  ; search
  (def search-test (map #(let [recipe-map (-> % first )]
                           {:match-count (count (re-seq #"olive oil" (val recipe-map)))
                            :recipe (key recipe-map)}) recipe-list))
  (reverse (sort-by :match-count search-test))

  (time (search-recipe "tomato"))
  (time (search-recipe "broccoli stilton soup"))
  (search-recipe "broccoli")
  (search-recipe "stilton")
  (search-recipe "lettuce soup")
  (time (+ 1 2))
  (time (second (zip-content->map "resources/recipes.zip")))
)
