-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2016 at 12:35 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ads_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `adslist_info`
--

CREATE TABLE `adslist_info` (
  `ads_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `client` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `adslist_info`
--

INSERT INTO `adslist_info` (`ads_id`, `title`, `text`, `thumbnail`, `client`) VALUES
(1, 'aa', 'bb', 'cc', 'dd'),
(2, 'aa', 'bb', 'cc', 'dd'),
(3, '3', '3', '333', '55555');

-- --------------------------------------------------------

--
-- Table structure for table `batches_info`
--

CREATE TABLE `batches_info` (
  `batch_id` int(11) NOT NULL,
  `start` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `end` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `schedule` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `batches_info`
--

INSERT INTO `batches_info` (`batch_id`, `start`, `end`, `schedule`) VALUES
(20, '2016-11-09T16:06', '2016-11-24T11:02', '/img/twitter_logo_2012.png'),
(21, '2016-10-11T18:34', '2016-11-08T15:05', '/img/wso2-logo-small.png'),
(22, '2016-11-16T17:55', '2016-11-22T15:03', '/img/appm_logo.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'admin', 'admin@gmail.com', '$2a$10$wENMOiXaNvkXN9BmCbh4ZOBpqfOyaASwSQlcRreHyamRitEe2xc56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adslist_info`
--
ALTER TABLE `adslist_info`
  ADD PRIMARY KEY (`ads_id`);

--
-- Indexes for table `batches_info`
--
ALTER TABLE `batches_info`
  ADD PRIMARY KEY (`batch_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adslist_info`
--
ALTER TABLE `adslist_info`
  MODIFY `ads_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `batches_info`
--
ALTER TABLE `batches_info`
  MODIFY `batch_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
