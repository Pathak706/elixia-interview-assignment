-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: elixia
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `destinations`
--

DROP TABLE IF EXISTS `destinations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destinations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destinations`
--

LOCK TABLES `destinations` WRITE;
/*!40000 ALTER TABLE `destinations` DISABLE KEYS */;
INSERT INTO `destinations` VALUES (1,'Patna','2020-07-05 11:23:10','2020-07-05 11:23:10'),(2,'Chennai','2020-07-05 11:23:20','2020-07-05 11:24:34');
/*!40000 ALTER TABLE `destinations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `excels`
--

DROP TABLE IF EXISTS `excels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `excels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `delivery_number` varchar(255) NOT NULL,
  `shipment_number` varchar(255) DEFAULT NULL,
  `source_code` varchar(255) NOT NULL,
  `destination_code` varchar(255) NOT NULL,
  `vehicle_number` varchar(255) NOT NULL,
  `transporter_code` varchar(255) NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `end_date` varchar(255) NOT NULL,
  `driver_name` varchar(255) DEFAULT NULL,
  `driver_phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `excels`
--

LOCK TABLES `excels` WRITE;
/*!40000 ALTER TABLE `excels` DISABLE KEYS */;
INSERT INTO `excels` VALUES (1,'1','1','1','1','1','1','2020-05-06 18:30:00','2020-06-06 18:30:00','rahul pathak','9326598839','2020-07-05 17:01:55','2020-07-05 17:01:55'),(2,'1',NULL,'2','2','2','2','2020-06-07 18:30:00','2020-09-08 18:30:00','Rohit Pathak',NULL,'2020-07-05 17:01:55','2020-07-05 17:01:55'),(3,'1','1','1','1','1','1','43958','43989','rahul pathak','9326598839','2020-07-05 17:05:31','2020-07-05 17:05:31'),(4,'1',NULL,'2','2','2','2','43990','44080','Rohit Pathak',NULL,'2020-07-05 17:05:31','2020-07-05 17:05:31'),(5,'1','1','1','1','1','1','43958','43989','rahul pathak','9326598839','2020-07-05 17:06:02','2020-07-05 17:06:02'),(6,'1',NULL,'2','2','2','2','43990','44080','Rohit Pathak',NULL,'2020-07-05 17:06:02','2020-07-05 17:06:02');
/*!40000 ALTER TABLE `excels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sources`
--

DROP TABLE IF EXISTS `sources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sources` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sources`
--

LOCK TABLES `sources` WRITE;
/*!40000 ALTER TABLE `sources` DISABLE KEYS */;
INSERT INTO `sources` VALUES (2,'Mumbai','2020-07-05 11:06:57','2020-07-05 11:14:04'),(3,'Kolkata','2020-07-05 11:07:06','2020-07-05 11:07:06');
/*!40000 ALTER TABLE `sources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transporters`
--

DROP TABLE IF EXISTS `transporters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transporters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transporters`
--

LOCK TABLES `transporters` WRITE;
/*!40000 ALTER TABLE `transporters` DISABLE KEYS */;
INSERT INTO `transporters` VALUES (1,'DHFL','2020-07-05 11:28:42','2020-07-07 01:01:19'),(3,'Air Express','2020-07-06 23:51:47','2020-07-07 01:09:44');
/*!40000 ALTER TABLE `transporters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rahul','Pathak','pathakrahul2704@gmail.com','$2b$10$Py6YteX5h9y1hvsdjT/7weoaID2TaqOTo/P.9QX46IqWY12y6HNiS','2020-07-04 20:53:37','2020-07-04 20:53:37'),(2,'rohit','pathak','pathakrohit@gmail.com','$2b$10$GJ3xDzpbFWtkiWwZ8/mBfe62bmbXS2wYU6CMZ6k21D2aNq2wXpT8S','2020-07-04 20:59:32','2020-07-04 20:59:32'),(3,'tets1','user','test1user@gmail.com','$2b$10$xMpgLAHUTovUPcaIi0k7HuJNSnvk3gAQl.LI77uyghnWL18rjo.m6','2020-07-06 21:42:59','2020-07-06 21:42:59'),(4,'test2','user','test2user@gmail.com','$2b$10$57ioNt7YJR1DHNA65N4fOelWaUAMED0XWo0wNqGdrvDqrO/D4h5Se','2020-07-06 22:03:26','2020-07-06 22:03:26');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-07 17:00:10
