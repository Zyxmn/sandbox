(ns hello
  (:import (java.util Date)
           (java.time LocalDate))
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



(->> 366144 str vec (take-last 2) (apply str))

(quartz-sec 89999999999999999999)
(format "%.2f" (float (/ 366144 100)))
(int (/ 366144 100))
(.getYear (Date. ))

(Date.)

(int (/ 7 5))

(defn custom-calendar
  "Given date return a lazy seq of 7 days before and after given date"
  [year month day]
  (let [localDateInstance (.atStartOfDay (. LocalDate parse (str year "-" month "-" day)))]
    (map (fn [index] (.plusDays localDateInstance index)) (range -7 8))))

;LocalDate.parse(str "2015-12-22").atStartOfDay()

(import (java.time LocalDate))

(.of LocalDate "2015-12-22")

(LocalDate/now)
(.now LocalDate) ; doesnt work cause its a static method i think
(LocalDate/of 2015 12 22)
(. LocalDate of 2015 12 22)
(.atStartOfDay (. LocalDate parse "2015-12-22"))

(custom-calendar 2015 12 21)
(rest (range -7 8))




)
