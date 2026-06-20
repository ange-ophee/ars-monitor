-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 18, 2026 at 07:51 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ars_monitor`
--

-- --------------------------------------------------------

--
-- Table structure for table `audit_assignments`
--

DROP TABLE IF EXISTS `audit_assignments`;
CREATE TABLE IF NOT EXISTS `audit_assignments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `farm_id` int NOT NULL,
  `auditor_id` int NOT NULL,
  `assigned_by` int NOT NULL,
  `assignment_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(50) DEFAULT 'pending',
  PRIMARY KEY (`id`),
  KEY `farm_id` (`farm_id`),
  KEY `auditor_id` (`auditor_id`),
  KEY `assigned_by` (`assigned_by`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `certifications`
--

DROP TABLE IF EXISTS `certifications`;
CREATE TABLE IF NOT EXISTS `certifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `farm_id` int NOT NULL,
  `certificate_number` varchar(100) DEFAULT NULL,
  `issue_date` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `certification_status` varchar(50) DEFAULT NULL,
  `evaluation_id` int DEFAULT NULL,
  `ars_standard` varchar(20) DEFAULT NULL,
  `traceability_verified` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `farm_id` (`farm_id`),
  KEY `fk_cert_eval` (`evaluation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cocoa_batches`
--

DROP TABLE IF EXISTS `cocoa_batches`;
CREATE TABLE IF NOT EXISTS `cocoa_batches` (
  `id` int NOT NULL AUTO_INCREMENT,
  `harvest_id` int NOT NULL,
  `batch_code` varchar(100) DEFAULT NULL,
  `weight_kg` decimal(10,2) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `batch_code` (`batch_code`),
  KEY `harvest_id` (`harvest_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `compliance_rules`
--

DROP TABLE IF EXISTS `compliance_rules`;
CREATE TABLE IF NOT EXISTS `compliance_rules` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rule_name` varchar(100) DEFAULT NULL,
  `description` text,
  `weight` decimal(5,2) DEFAULT NULL,
  `standard_code` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `compliance_rules`
--

INSERT INTO `compliance_rules` (`id`, `rule_name`, `description`, `weight`, `standard_code`) VALUES
(1, 'Farm Registration', 'Farm must be officially registered', '20.00', 'ARS1000-1'),
(2, 'Environmental Protection', 'Protection of forests and water resources', '30.00', 'ARS1000-1'),
(3, 'Farmer Training', 'Farmer must receive periodic training', '25.00', 'ARS1000-2'),
(4, 'Worker Safety', 'Protective equipment and safety measures', '25.00', 'ARS1000-2'),
(5, 'Traceability', 'Farm production must be traceable', '30.00', 'ARS1000-3'),
(6, 'Audit Documentation', 'All inspections properly documented', '20.00', 'ARS1000-3');

-- --------------------------------------------------------

--
-- Table structure for table `corrective_actions`
--

DROP TABLE IF EXISTS `corrective_actions`;
CREATE TABLE IF NOT EXISTS `corrective_actions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `evaluation_id` int NOT NULL,
  `action_description` text,
  `due_date` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `evaluation_id` (`evaluation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `evaluations`
--

DROP TABLE IF EXISTS `evaluations`;
CREATE TABLE IF NOT EXISTS `evaluations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `farm_id` int NOT NULL,
  `evaluator_id` int NOT NULL,
  `evaluation_date` date NOT NULL,
  `compliance_score` decimal(5,2) DEFAULT NULL,
  `evaluation_status` varchar(50) DEFAULT NULL,
  `recommendations` text,
  `corrective_actions` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_evaluation_farm` (`farm_id`),
  KEY `fk_evaluation_user` (`evaluator_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `farmers`
--

DROP TABLE IF EXISTS `farmers`;
CREATE TABLE IF NOT EXISTS `farmers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `cooperative_name` varchar(100) DEFAULT NULL,
  `region` varchar(100) DEFAULT NULL,
  `village` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_farmer_user` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `farms`
--

DROP TABLE IF EXISTS `farms`;
CREATE TABLE IF NOT EXISTS `farms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `farmer_id` int NOT NULL,
  `farm_name` varchar(100) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `gps_coordinates` varchar(100) DEFAULT NULL,
  `farm_size` decimal(10,2) DEFAULT NULL,
  `production_capacity` decimal(10,2) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `farm_type` varchar(50) DEFAULT NULL,
  `risk_level` varchar(20) DEFAULT 'low',
  `certification_status` varchar(50) DEFAULT 'pending',
  PRIMARY KEY (`id`),
  KEY `fk_farm_farmer` (`farmer_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `farm_rule_results`
--

DROP TABLE IF EXISTS `farm_rule_results`;
CREATE TABLE IF NOT EXISTS `farm_rule_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `farm_id` int DEFAULT NULL,
  `rule_id` int DEFAULT NULL,
  `score` decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `farm_id` (`farm_id`),
  KEY `rule_id` (`rule_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `harvests`
--

DROP TABLE IF EXISTS `harvests`;
CREATE TABLE IF NOT EXISTS `harvests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `farm_id` int NOT NULL,
  `harvest_date` date DEFAULT NULL,
  `quantity_kg` decimal(10,2) DEFAULT NULL,
  `quality_grade` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `farm_id` (`farm_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `monitoring_records`
--

DROP TABLE IF EXISTS `monitoring_records`;
CREATE TABLE IF NOT EXISTS `monitoring_records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `farm_id` int NOT NULL,
  `auditor_id` int NOT NULL,
  `inspection_date` date NOT NULL,
  `observations` text,
  `disease_presence` varchar(255) DEFAULT NULL,
  `environmental_conditions` text,
  `production_status` varchar(100) DEFAULT NULL,
  `monitoring_status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `session_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_monitoring_farm` (`farm_id`),
  KEY `fk_monitoring_auditor` (`auditor_id`),
  KEY `fk_monitoring_session` (`session_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `monitoring_sessions`
--

DROP TABLE IF EXISTS `monitoring_sessions`;
CREATE TABLE IF NOT EXISTS `monitoring_sessions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `assignment_id` int NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` varchar(50) DEFAULT 'ongoing',
  PRIMARY KEY (`id`),
  KEY `assignment_id` (`assignment_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
CREATE TABLE IF NOT EXISTS `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `message` text NOT NULL,
  `notification_type` varchar(100) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_notification_user` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
CREATE TABLE IF NOT EXISTS `reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `generated_by` int NOT NULL,
  `report_type` varchar(100) DEFAULT NULL,
  `report_content` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_report_user` (`generated_by`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`) VALUES
(1, 'Admin'),
(2, 'Auditor'),
(3, 'Cooperative Manager'),
(4, 'Farmer');

-- --------------------------------------------------------

--
-- Table structure for table `traceability_records`
--

DROP TABLE IF EXISTS `traceability_records`;
CREATE TABLE IF NOT EXISTS `traceability_records` (
  `id` int NOT NULL AUTO_INCREMENT,
  `batch_id` int NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `action_type` varchar(100) DEFAULT NULL,
  `action_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `batch_id` (`batch_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(20) DEFAULT 'active',
  `last_login` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_user_role` (`role_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `phone`, `role_id`, `created_at`, `status`, `last_login`) VALUES
(1, 'Maeva Jenkins', 'maevajenks@gmail.com', '$2b$10$8ViWWSpcXzHP93yMN6C4D.4cbeTs3wYiWqHbVZO4TxwNIly/f8Rzm', '687542149', 1, '2026-06-15 17:55:29', 'active', NULL),
(2, 'Manuella Ophélie', 'manuassako@gmail.com', '$2b$10$unYbt9yQ39WYXjLG5P7q2e0KrEeQkMynSYCFcoG81UvoxbZpltue2', '694242635', 2, '2026-06-15 17:57:53', 'active', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
