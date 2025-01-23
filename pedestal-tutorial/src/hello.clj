(ns hello
  (:require [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]))


(prn "yolo")

(defn hello-world [arg]
  (println "yolo"))

(map inc [1 2 3])

(reduce (fn [a b] (+ a b)) 1 [2 3 4])

(comment

 (defn drop-nth-items [coll n]
   (->> coll
       (partition-all n)
       (map #(if (= (count %) n)
               (drop-last %)
               %))
       flatten))

 (drop-nth-items  [1 2 3 4 5 6 7 8] 3)

 (<= 1 1 )

(defn factorial! [n]
  (loop [total 1
         next-num n]
    (if (>= 1 next-num)
      total
      (recur (* total next-num) (dec next-num)))))

 (factorial! 4)

  )
