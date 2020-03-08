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
  "A simple search that matches the whole phrase with the recipe description
  and returns the top 10 hits (most occurence of given phrase in a recipe's
  description), if there are no hits it returns an empty list"
  [phrase]
  (->> (pmap #(let [recipe-map (-> % first)
                    recipe-name (key recipe-map)
                    recipe-description (val recipe-map)]
                {:match-count (count (re-seq (re-pattern (str phrase)) recipe-description))
                 :recipe-name recipe-name})
             recipe-list)
       (sort-by :match-count)
       (filter #(> (:match-count %) 0))
       reverse
       (take 10)))

(defn -main
  "Print out relevant recipes in order"
  [phrase]
  (let [relevant-recipes (search-recipe phrase)]
    (doseq [single-recipe relevant-recipes]
      (println (-> (:recipe-name single-recipe)
                   (clojure.string/replace #"recipes/" ""))))))


(comment

  ;Example Usage of search function

  (search-recipe "broccoli")
  (search-recipe "stilton")
  (search-recipe "lettuce soup")

  (time (search-recipe "tomato"))
  (time (search-recipe "broccoli stilton soup"))


  )
