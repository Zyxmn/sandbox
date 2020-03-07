(ns recipe-search.core
  (:require [clojure.java.io :as io])
  (:import java.util.zip.ZipInputStream)
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(defn filenames-in-zip [filename]
  (let [z (java.util.zip.ZipFile. filename)]
    (map #(.getName %) (enumeration-seq (.entries z)))))

(comment

  (-main)

  (filenames-in-zip "resources/recipes.zip")
  (def zs (ZipInputStream. (io/input-stream "resources/recipes.zip")))
  (def ze (.getNextEntry zs))
  (def zip-entry (-> (java.util.zip.ZipFile.  "resources/recipes.zip")
                     (.getEntry "recipes/afelia.txt")))
  (-> (java.util.zip.ZipFile.  "resources/recipes.zip")
      (.getInputStream zip-entry)
      (slurp))


  (with-open [in (type (ZipInputStream.
                   (clojure.java.io/input-stream
                     "resources/recipes.zip")))]
    (slurp in))
  )
