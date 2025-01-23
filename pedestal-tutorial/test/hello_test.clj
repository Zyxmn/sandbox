(ns hello-test
  (:require [clojure.test :refer [deftest is testing run-tests]]))


(deftest dummy-test
  (testing "simple test"
    (is (= 1 2))))

(comment
 (run-tests 'hello-test)

(defn reverse-interleave
  [coll n]
  (reduce (fn [acc ele]

            )


          (repeat n coll)
          coll)



  )

(reverse-interleave [1 2 3 4 5 6] 2)

(def a  )

(repeat 2 [1 2 3 4 5 6])

(.indexOf [1 2 3 4 5 6] 5)

(map-indexed (fn [idx ele] [idx ele]) [1 2 3 4 5 6])

(apply map vector (partition 3 (range 9)))

(loop [coll [1 2 3 4 5 6]
       n 2
       result [(take-nth n coll)]]
  (if (<= n 0)
   result
   (recur coll (dec n) (conj result (take-nth n coll)))))
l
(range 9)

(/ 3 3 )
(vector `(1 2 3))
(Math/abs -2)

(defn rotate [places coll]
 (let [actual-places (if (> (Math/abs places) (count coll))
                            (- (Math/abs places) (count coll))
                            (Math/abs places))]

   (if (pos? places)
     ;rotate left
      (as-> (vec coll) $
          (conj $ (take actual-places coll))
          (drop actual-places $)
          (flatten $))
      ;rotate right
      (as-> (list* coll) $
          (conj $ (take-last actual-places coll))
          (drop-last actual-places $)
          (flatten $)
          )))
 )

(rotate 2 [1 2 3 4 5])
(rotate -2 [1 2 3 4 5])

(list* [1 2 3 4 5])





  )
