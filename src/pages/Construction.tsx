import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Construction } from "lucide-react";

const ConstructionSimple = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-10"
        >
          <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <Construction className="w-20 h-20 text-red-600" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Site en construction
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg mb-8"
        >
          Nous travaillons actuellement sur l'amélioration de notre site web
          pour vous offrir une meilleure expérience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <Button
            size="lg"
            className="w-full bg-red-600 hover:bg-red-700"
            asChild
          >
            <Link to="/" className="flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Retourner à l'accueil
            </Link>
          </Button>

          <p className="text-gray-500 text-sm">
            Revenez bientôt pour découvrir notre nouveau site !
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ConstructionSimple;
