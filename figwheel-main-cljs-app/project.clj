(defproject figwheel-main-cljs-app "0.1"
  :description "A minimal sample full-stack Clojure(Script) website"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.773"]]
  :plugins [[cider/cider-nrepl "0.24.0"]]
  :profiles {:dev
             {:dependencies [[org.clojure/clojurescript "1.10.773"]
                             [com.bhauman/figwheel-main "0.2.14"]
                             [cider/piggieback "0.4.2"]]
              :resource-paths ["target"]
              :clean-targets ^{:protect false} ["target"]
              :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}})
