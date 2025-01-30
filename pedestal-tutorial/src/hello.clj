(ns hello
  (:import (java.util Date)
           (java.time Date))
  (:gen-class))

(defn -main [& args]
  (println "yolo"))

(comment


  ;hh:mm:ss.hh
  (defn quartz-sec [vib-num]
    (let [total-seconds  (long (/ vib-num 100))
          hours (long (/ total-seconds 3600))
          minutes (-> (mod total-seconds  3600) (/ 60) long)
          seconds (-> (mod total-seconds  3600) (mod 60) long)
          last-two-digits (->> vib-num str vec (take-last 2) (apply str))
          ]
      (println hours)
      (str hours ":" minutes ":" seconds"."last-two-digits)))

   123456656456

(->> 366144 str vec (take-last 2) (apply str))
 3600 60 1 44

(quartz-sec 89999999999999999999)
(format "%.2f" (float (/ 366144 100)))
(int (/ 366144 100))
(Date. )

(int (/ 7 5))


)
