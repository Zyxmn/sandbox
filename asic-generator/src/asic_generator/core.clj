(ns asic-generator.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))


(def input-string
  "# Heading 1
## Heading 2
## Another Heading 2
### Heading 3
#### Heading X
##### Heading Y
###### Heading Y
####### Heading Y
## Heading Final")

(def asci-L "\u2514")
(def asci-T  "\u251C")
(def asci-dash "\u2500")

(defn hash-replacement
  [input-string]
  (let [no-of-hash (count (re-seq #"#" input-string))
        hash-regex (apply str (repeat no-of-hash "#"))
        no-of-tabs (apply str
                          (repeat (+ 4 (* (- no-of-hash 4) 4))


                                     " "))]
    (println "no-of-hash: " no-of-hash)
    (println "hash-regex" hash-regex)
    (cond
      (= no-of-hash 1) (clojure.string/replace input-string #"#" "\u2514\u2500\u2500")
      (= no-of-hash 2) (clojure.string/replace input-string #"##" "    \u251C\u2500\u2500")
      (= no-of-hash 3) (clojure.string/replace input-string (re-pattern hash-regex)
                                                "    \u2502   \u2514\u2500\u2500")
      (>= no-of-hash 4) (clojure.string/replace input-string (re-pattern hash-regex)
                                                (str "    \u2502   " no-of-tabs "\u2514\u2500\u2500")))))

(defn table-of-contents
  [input-string]
  (let [vec-string (clojure.string/split input-string #"\n")
        hash-replaced-string (map hash-replacement vec-string)
        add-new-line (map #(str % "\n") hash-replaced-string)]
    (println (apply str add-new-line))))

(comment

(first (table-of-contents input-string))
(>= 4 3)
(apply str (repeat 3 "#"))
(apply str (vec input-string))
(vector input-string)
(def vec-string (-> (clojure.string/split input-string #"\n")))

(count (re-find #"#" (first vec-string)))
(count (re-seq #"#" (second vec-string)))
(println (hash-replacement (second vec-string)))


 (println (table-of-contents "no"))
 (println (read-string "\u2502"))
 (println (-> input-string
              (clojure.string/replace-first #"#" "\t\u2514\u251C")))
 (println (clojure.string/replace input-string #"#" "\t"))
 (prn input-string)

)
