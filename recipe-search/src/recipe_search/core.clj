(ns recipe-search.core
  (:require [clojure.java.io :as io])
  (:import java.util.zip.ZipInputStream)
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

(defn zip-content->map
  [zipfile]
  (let [z (java.util.zip.ZipFile. zipfile)
        filenames-in-zip (map #(.getName %) (enumeration-seq (.entries z)))
        entries-in-zip (map #(-> z (.getEntry %)) filenames-in-zip)]
      (map #(let [recipe-name (.getName %)
                  recipe-description (-> z (.getInputStream %))]
              {:recipe-name recipe-name
               :recipe-description recipe-description})
           entries-in-zip
           )))

(comment

  (-main)

  (filenames-in-zip "resources/recipes.zip")
  (entries-in-zip "resources/recipes.zip")
  (zip-content->map "resources/recipes.zip")
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
