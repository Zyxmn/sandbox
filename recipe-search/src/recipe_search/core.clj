(ns recipe-search.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(defn filenames-in-zip [filename]
  "Return a list of filenames present inside the zip file"
  (let [z (java.util.zip.ZipFile. filename)]
    (map #(.getName %) (enumeration-seq (.entries z)))))

(defn entries-in-zip [filename]
  "Return a list of zip entries present inside the zip file"
  (let [z (java.util.zip.ZipFile. filename)
        filenames-in-zip (map #(.getName %) (enumeration-seq (.entries z)))]
    (map #(-> z (.getEntry %)) filenames-in-zip)))

(defn zip-content->map-seq
  "Read a zipfile and return a lazyseq of maps with filename as key and
  file content input stream as value"
  [zipfile]
  (let [z (java.util.zip.ZipFile. zipfile)
        filenames-in-zip (map #(.getName %) (enumeration-seq (.entries z)))
        entries-in-zip (map #(-> z (.getEntry %)) filenames-in-zip)]
    (map #(let [recipe-name (str (.getName %))
                recipe-description (-> z (.getInputStream %))]
            {(keyword recipe-name) recipe-description})
         entries-in-zip)))

(defn zip-content->map
  "Read a zipfile and return a lazyseq of maps with filename as key and its
  contents as value"
  [zipfile]
  (let [z (java.util.zip.ZipFile. zipfile)
        filenames-in-zip (map #(.getName %) (enumeration-seq (.entries z)))
        entries-in-zip (map #(-> z (.getEntry %)) filenames-in-zip)]
    (map #(let [recipe-name (.getName %)
                recipe-description (-> z (.getInputStream %) slurp)]
            {(keyword recipe-name) recipe-description})
         entries-in-zip)))

(def recipe-list (zip-content->map "resources/recipes.zip"))


(comment

  (-main)

  ; search
  (map #(let [recipe-map (-> % first )]
          {:match-count (count (re-seq #"olive oil" (val recipe-map)))
           :recipe (key recipe-map)}) recipe-list)

  (count (re-seq #"yolo" "yolo yolo1 and yolo2"))
  (filenames-in-zip "resources/recipes.zip")
  (entries-in-zip "resources/recipes.zip")
  (second (zip-content->map "resources/recipes.zip"))
  (def zs (ZipInputStream. (io/input-stream "resources/recipes.zip")))
  (def ze (.getNextEntry zs))
  (def zip-entry (-> (java.util.zip.ZipFile.  "resources/recipes.zip")
                     (.getEntry "recipes/afelia.txt")))
  (-> (java.util.zip.ZipFile.  "resources/recipes.zip")
      (.getInputStream zip-entry)
      slurp)


  (with-open [in (type (ZipInputStream.
                   (clojure.java.io/input-stream
                     "resources/recipes.zip")))]
    (slurp in))
  )
