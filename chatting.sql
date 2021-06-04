-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: chatting_app
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_from` varchar(45) DEFAULT NULL,
  `user_to` varchar(45) DEFAULT NULL,
  `message` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=146 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (21,'1','3','haha','2021-06-03 17:33:28'),(22,'A','B','sdfs','2021-06-03 17:33:45'),(23,'','','gdfg','2021-06-03 17:34:32'),(24,'','','gdf','2021-06-03 17:34:45'),(25,'A','B','fdgdg','2021-06-03 17:35:19'),(26,'A','B','sdfsdf','2021-06-03 17:36:59'),(27,'A','B','gdfg','2021-06-03 17:37:50'),(28,NULL,'B','ư','2021-06-03 17:40:00'),(29,NULL,'B','dfsdfd','2021-06-03 17:40:01'),(30,'1','B','sdfsf','2021-06-03 17:40:59'),(31,NULL,'3','dfsdf','2021-06-03 17:43:07'),(32,'1','B','dsfs','2021-06-03 17:43:41'),(33,'1','B','ghgfhfg\\','2021-06-03 17:43:44'),(34,NULL,'1','xczc','2021-06-03 17:44:00'),(35,NULL,'3','zxzx\'s;\'l','2021-06-03 17:44:05'),(36,'1','B','sdfsdf','2021-06-03 17:46:24'),(37,'1','B','dfgdg','2021-06-03 17:46:42'),(38,'3','B','hihi tui chỉ test thôi','2021-06-03 17:47:49'),(39,'2','B','ok admin dã duyệt','2021-06-03 17:48:06'),(40,'1','B','sdf','2021-06-03 17:51:10'),(41,'1','B','sdf','2021-06-03 17:51:10'),(42,'1','B','sdf','2021-06-03 17:51:10'),(43,'1','B','sdf','2021-06-03 17:51:10'),(44,'1','B','sdf','2021-06-03 17:51:11'),(45,'1','B','s','2021-06-03 17:51:11'),(46,'1','B','dfsd','2021-06-03 17:51:11'),(47,'1','B','fd','2021-06-03 17:51:11'),(48,'1','B','fdf','2021-06-03 17:51:11'),(49,'1','B','d','2021-06-03 17:51:12'),(50,'1','B','f','2021-06-03 17:51:12'),(51,'1','B','df','2021-06-03 17:51:12'),(52,'1','B','d','2021-06-03 17:51:12'),(53,'1','B','fd','2021-06-03 17:51:12'),(54,'1','B','f','2021-06-03 17:51:12'),(55,'1','B','df','2021-06-03 17:51:13'),(56,'1','B','d','2021-06-03 17:51:13'),(57,'1','B','fdf','2021-06-03 17:51:13'),(58,'1','B','d','2021-06-03 17:51:13'),(59,'1','B','fd','2021-06-03 17:51:14'),(60,'1','B','fd','2021-06-03 17:51:14'),(61,'1','B','fd','2021-06-03 17:51:14'),(62,'1','B','fd','2021-06-03 17:51:14'),(63,'1','B','fdf','2021-06-03 17:51:15'),(64,'1','B','avx','2021-06-03 17:52:13'),(65,NULL,'3','hihi','2021-06-04 07:48:37'),(66,NULL,'3','chào','2021-06-04 07:48:39'),(67,NULL,'10','hi','2021-06-04 07:49:28'),(68,NULL,'10','hi','2021-06-04 07:49:31'),(69,NULL,'10','dsff','2021-06-04 07:49:43'),(70,'[object Object]','B','hi','2021-06-04 07:52:31'),(71,'[object Object]','B','hi','2021-06-04 07:53:35'),(72,'14','B','alo tester 3 đây','2021-06-04 07:54:41'),(73,'3','B','dam','2021-06-04 07:54:58'),(74,NULL,'14','chào cậu','2021-06-04 07:56:41'),(75,NULL,'3','chào','2021-06-04 07:56:53'),(76,NULL,'14','ok','2021-06-04 07:57:00'),(77,NULL,'3','hi','2021-06-04 07:59:08'),(78,NULL,'3','hi','2021-06-04 07:59:53'),(79,'14','3','hi chào bạn','2021-06-04 08:17:36'),(80,NULL,'14','ok nè','2021-06-04 08:17:43'),(81,'3','14','ok nè','2021-06-04 08:17:49'),(82,'15','B','hú','2021-06-04 09:20:46'),(83,'1','3','alo','2021-06-04 09:42:51'),(84,'3','1','ok','2021-06-04 09:45:26'),(85,'1','3','ok','2021-06-04 09:48:31'),(86,'1','B','hơ hơ','2021-06-04 09:50:44'),(87,'1','B','alo cậu ơi','2021-06-04 09:53:34'),(88,'1','B','hi','2021-06-04 09:55:08'),(89,'1','B','alo','2021-06-04 09:56:09'),(90,'1','3','dfg','2021-06-04 10:03:17'),(91,'1','B','dạ','2021-06-04 10:08:51'),(92,'1','B','dạ','2021-06-04 10:08:53'),(93,'1','B','da','2021-06-04 10:09:02'),(94,'1','B','dạ','2021-06-04 10:09:48'),(95,'1','B','ok cậu','2021-06-04 10:09:51'),(96,'1','B','dạ','2021-06-04 10:10:28'),(97,'1','B','hihi','2021-06-04 10:11:30'),(98,'1','B','okey cậu','2021-06-04 10:12:09'),(99,'1','B','sfs','2021-06-04 10:14:02'),(100,'1','B','hihi','2021-06-04 10:15:12'),(101,'1','3','hi','2021-06-04 10:27:17'),(102,'1','3','sdfs','2021-06-04 10:28:33'),(103,'1','3','dfgg','2021-06-04 10:28:53'),(104,'1','3','dsff','2021-06-04 10:29:40'),(105,'1','3','sdfs','2021-06-04 10:29:40'),(106,'3','B','ok','2021-06-04 10:29:49'),(107,'1','B','dạ','2021-06-04 10:34:52'),(108,'3','B','ok','2021-06-04 10:35:00'),(109,'3','B','ok','2021-06-04 10:35:10'),(110,'1','B','hiih','2021-06-04 10:35:56'),(111,'1','B','hi','2021-06-04 10:36:07'),(112,'3','1','alo','2021-06-04 10:37:01'),(113,'3','1','bạn ơi','2021-06-04 10:37:07'),(114,'3','1','alo','2021-06-04 10:37:15'),(115,'1','3','ok','2021-06-04 10:37:28'),(116,'1','3','sdsds','2021-06-04 10:37:30'),(117,'3','1','hihi','2021-06-04 10:37:33'),(118,'3','1','tui pit rồi','2021-06-04 10:37:36'),(119,'3','1','hi','2021-06-04 10:37:59'),(120,'1','3','tui pit r','2021-06-04 10:38:05'),(121,'3','1','hi','2021-06-04 10:38:49'),(122,'1','3','ok','2021-06-04 10:38:55'),(123,'1','3','hihi','2021-06-04 10:40:07'),(124,'1','B','ok','2021-06-04 10:40:26'),(125,'1','B','ok','2021-06-04 10:40:40'),(126,'1','B','hi','2021-06-04 10:43:15'),(127,'3','B','ok','2021-06-04 10:43:19'),(128,'3','B','ok','2021-06-04 10:43:20'),(129,'1','B','dạ','2021-06-04 10:45:06'),(130,'3','B','ok cạu','2021-06-04 10:45:11'),(131,'1','3','ok','2021-06-04 10:45:21'),(132,'3','B','ok','2021-06-04 10:45:30'),(133,'1','2','ok','2021-06-04 10:45:42'),(134,'3','B','okok','2021-06-04 10:45:45'),(135,'3','1','ok','2021-06-04 10:45:55'),(136,'1','2','ọk','2021-06-04 10:45:59'),(137,'1','B','hi','2021-06-04 12:15:44'),(138,'1','B','thiên đepj trai','2021-06-04 12:15:54'),(139,'3','B','ok la la','2021-06-04 12:15:59'),(140,'1','3','alo thiên','2021-06-04 12:16:20'),(141,'3','1','gì v','2021-06-04 12:16:33'),(142,'3','B','hi','2021-06-04 12:16:42'),(143,'16','B','hi','2021-06-04 12:18:15'),(144,'17','B','hioii','2021-06-04 12:18:50'),(145,'3','B','ọkóa','2021-06-04 12:18:55');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'cuongle','123'),(2,'admin','123'),(3,'thien','123'),(5,'cuongle123','123'),(6,'cuonglehaha','123'),(7,'1thien','123'),(8,'sdaaaa','132'),(9,'cuongle23','123'),(10,'cuongle111111','123'),(11,'tester','123'),(12,'tester1','123'),(13,'tester2','123'),(14,'tester3','123'),(15,'thien123','123'),(16,'admin123','123'),(17,'Phú Cường','123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-04 19:26:22
