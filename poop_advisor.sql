-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  jeu. 11 avr. 2019 à 08:34
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `poop_advisor`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(256) NOT NULL,
  `message` varchar(256) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_marker` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `user`, `message`, `date`, `id_marker`) VALUES
(1, 'Kevin Whipaloo', 'Les meilleures toilettes de Paris', '2019-04-09 11:48:39', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(2, 'Kevin Whipaloo', 'Les meilleures toilettes de Paris', '2019-04-09 11:48:39', NULL),
(3, 'Kevin Whipaloo', 'Les meilleures toilettes de Paris', '2019-04-09 11:48:39', NULL),
(5, 'Quentin', 'Waw', '2019-04-09 12:07:30', NULL),
(7, 'Raphaerl', 'Ces toilettes sont super propre', '2019-04-09 13:36:06', NULL),
(9, 'dgehz', 'znhdjzz', '2019-04-09 16:43:57', NULL),
(10, 'Thomas', 'Ces toilettes m\'ont sauvé la vie !', '2019-04-09 16:53:06', NULL),
(15, 'Raph', 'Bien', '2019-04-09 17:10:11', NULL),
(29, 'Rom1', 'Acceptable', '2019-04-09 17:32:44', NULL),
(31, '', '', '2019-04-10 11:51:17', NULL),
(32, 'oui', 'incroyable', '2019-04-10 12:15:06', NULL),
(33, 'oui', 'loloool', '2019-04-10 12:15:15', NULL),
(34, 'oui', 'oui', '2019-04-10 12:50:02', 'oui'),
(35, 'sdnjnqdj', 'njdnj', '2019-04-10 14:05:17', ''),
(36, 'jshjdhjqs', 'hjdhjhdjd', '2019-04-10 14:05:25', ''),
(37, 'nsdjhjd', 'dhjhjdshjj', '2019-04-10 14:05:48', ''),
(38, 'nsdjhjd', 'dhjhjdshjj', '2019-04-10 14:06:33', ''),
(39, 'nsdjhjd', 'dhjhjdshjj', '2019-04-10 14:07:31', ''),
(40, 'nsdjhjd', 'dhjhjdshjj', '2019-04-10 14:08:04', ''),
(41, 'nsdjhjd', 'dhjhjdshjj', '2019-04-10 14:09:17', ''),
(42, 'nsdjhjd', 'dhjhjdshjj', '2019-04-10 14:09:34', ''),
(43, 'hjddgfdshh', 'jdhsbhsds', '2019-04-10 14:10:03', ''),
(44, 'ghhhhhhhh', 'fgggggggggg', '2019-04-10 14:11:08', ''),
(45, 'hjdhsjhdsjh', 'hjhsdjhd', '2019-04-10 14:12:43', 'iii'),
(46, 'hjdhsjhdsjh', 'hjhsdjhd', '2019-04-10 14:18:30', ''),
(47, 'hjdhsjhdsjh', 'hjhsdjhd', '2019-04-10 14:19:17', ''),
(48, 'hjdhsjhdsjh', 'hjhsdjhd', '2019-04-10 14:28:31', ''),
(49, 'bssbscb', 'bsbdhb', '2019-04-10 14:41:55', ''),
(50, 'bssbscb', 'bsbdhb', '2019-04-10 14:43:24', ''),
(51, 'bssbscb', 'bsbdhb', '2019-04-10 14:43:37', ''),
(52, 'bssbscb', 'bsbdhb', '2019-04-10 14:43:45', ''),
(53, 'gdhgdgd', 'hdshdjhsd', '2019-04-10 14:54:07', 'e0bb84e274e2e929faa098fab892b6282cea43cf'),
(54, 'loool', 'loool', '2019-04-10 14:54:57', 'cd92e93dbf046dc168c1a6e5f1199c68617bb71e'),
(55, 'loool', 'loool', '2019-04-10 14:56:29', 'cd92e93dbf046dc168c1a6e5f1199c68617bb71e'),
(56, 'loool', 'loool', '2019-04-10 14:56:58', 'cd92e93dbf046dc168c1a6e5f1199c68617bb71e'),
(57, 'loool', 'loool', '2019-04-10 14:57:47', 'cd92e93dbf046dc168c1a6e5f1199c68617bb71e'),
(58, 'sbjdbdbdh', 'sjdijdijd', '2019-04-10 14:57:58', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(59, 'sbjdbdbdh', 'sjdijdijd', '2019-04-10 15:13:52', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(60, 'sbjdbdbdh', 'sjdijdijd', '2019-04-10 15:17:46', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(61, 'sbjdbdbdh', 'sjdijdijd', '2019-04-10 15:22:01', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(62, 'sbjdbdbdh', 'sjdijdijd', '2019-04-10 15:24:01', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(63, 'hgdshgdhsgddsh', 'kkkkkk', '2019-04-10 15:24:48', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(64, 'sjhjdhfj', 'jhjshdjhsdjh', '2019-04-10 15:24:59', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(65, 'oui', 'non', '2019-04-10 15:25:23', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(66, 'oui', 'll', '2019-04-10 15:25:34', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(67, 'oui', 'll', '2019-04-10 15:26:05', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(68, 'oui', 'll', '2019-04-10 15:26:58', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(69, 'oui', 'll', '2019-04-10 15:27:06', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(70, 'hsjdhjs', 'popopopo', '2019-04-10 15:27:19', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(71, 'hgdsh', 'hsdjh', '2019-04-10 15:28:22', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(72, 'hgdsh', 'hsdjh', '2019-04-10 15:29:58', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(73, 'hgdsh', 'hsdjh', '2019-04-10 15:32:00', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(74, 'hjdshdj', 'nsdn', '2019-04-10 15:32:10', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(75, 'hjdshdj', 'nsdn', '2019-04-10 15:32:35', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(76, 'ssdjh', 'hjdshj', '2019-04-10 15:32:47', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(77, 'jdsqhj', 'dhjshj', '2019-04-10 15:45:35', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(78, 'jdsqhj', 'dhjshj', '2019-04-10 15:48:48', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(79, 'jdsqhj', 'dhjshj', '2019-04-10 15:49:09', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(80, 'jdsqhj', 'dhjshj', '2019-04-10 15:49:16', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(81, 'ghsghdgq', 'ghgdshgd', '2019-04-10 16:10:28', 'a31bf528b34a12dbcfb60e1d0e94d4c308ece574'),
(82, 'ghsghdgq', 'ghgdshgd', '2019-04-10 16:19:34', 'a31bf528b34a12dbcfb60e1d0e94d4c308ece574'),
(83, 'ghsghdgq', 'ghgdshgd', '2019-04-10 16:19:39', 'a31bf528b34a12dbcfb60e1d0e94d4c308ece574'),
(84, 'jkj', 'jkj', '2019-04-10 16:19:59', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(85, 'jkj', 'jkj', '2019-04-10 16:22:24', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(86, 'salut', 'les gens', '2019-04-10 18:33:59', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(87, 'salut', 'les gens', '2019-04-10 18:47:32', ''),
(88, 'salut', 'les gens', '2019-04-10 18:47:52', ''),
(89, 'salut', 'les gens', '2019-04-10 18:49:11', ''),
(90, 'salut', 'les gens', '2019-04-10 18:49:41', ''),
(91, 'dsjhqj', 'jhsdh', '2019-04-10 19:17:44', ''),
(92, 'hjshh', 'hjhj', '2019-04-10 19:21:30', ''),
(93, 'hjshh', 'hjhj', '2019-04-10 19:21:49', NULL),
(94, 'hjshh', 'hjhj', '2019-04-10 19:22:16', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(95, 'hjshh', 'hjhj', '2019-04-10 19:22:36', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(96, 'hjshh', 'hjhj', '2019-04-10 19:22:54', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(97, 'hjshh', 'hjhj', '2019-04-10 19:23:03', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(98, 'oui', 'bonjour', '2019-04-10 19:23:15', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(99, 'oui', 'bonjour', '2019-04-10 19:26:20', 'b868d6ae71e208d8ef7d99354b66dd91f6132e67'),
(100, 'jdkjz', 'djzakn', '2019-04-10 19:26:30', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(101, 'jdkjz', 'djzakn', '2019-04-10 19:27:54', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(102, 'jdkjz', 'djzakn', '2019-04-10 19:28:14', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(103, 'bhddbqjhsbdj', 'qndkshdsqj', '2019-04-10 19:28:24', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(104, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:28:58', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(105, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:47:20', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(106, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:48:34', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(107, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:49:52', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(108, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:52:22', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(109, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:52:56', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(110, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:53:27', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(111, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:56:12', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(112, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:56:56', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(113, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:58:32', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(114, 'clÃ©ment', 'super toilette loll', '2019-04-10 19:59:10', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(115, 'clÃ©ment', 'super toilette loll', '2019-04-10 20:00:34', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(116, 'clÃ©ment', 'super toilette loll', '2019-04-10 20:00:46', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(117, 'clÃ©ment', 'super toilette loll', '2019-04-10 20:01:30', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(118, 'clÃ©ment', 'super toilette loll', '2019-04-10 20:02:04', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(119, 'clÃ©ment', 'super toilette loll', '2019-04-10 20:03:10', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(120, 'clÃ©ment', 'super toilette loll', '2019-04-10 20:03:30', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(121, 'clÃ©ment', 'super toilette loll', '2019-04-10 20:04:11', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(122, 'clÃ©ment', 'super toilette loll', '2019-04-10 20:04:41', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(123, 'clÃ©ment', 'super toilette loll', '2019-04-10 20:05:43', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(124, 'clÃ©ment', 'super toilette loll', '2019-04-10 21:20:08', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(125, 'clÃ©ment', 'super toilette loll', '2019-04-10 21:20:32', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(126, 'clÃ©ment', 'super toilette loll', '2019-04-10 21:26:25', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(127, 'clÃ©ment', 'super toilette loll', '2019-04-10 21:38:28', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(128, 'clÃ©ment', 'super toilette loll', '2019-04-10 21:38:31', 'f5c5ee386b828aaab8bf310e501c27578e588e9c');

-- --------------------------------------------------------

--
-- Structure de la table `rating`
--

DROP TABLE IF EXISTS `rating`;
CREATE TABLE IF NOT EXISTS `rating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rate` enum('1','2','3','4','5') NOT NULL,
  `id_marker` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rating`
--

INSERT INTO `rating` (`id`, `rate`, `id_marker`) VALUES
(1, '3', 'oui'),
(2, '5', NULL),
(3, '3', NULL),
(4, '4', NULL),
(5, '5', NULL),
(6, '5', NULL),
(7, '1', NULL),
(8, '2', NULL),
(9, '3', NULL),
(10, '4', NULL),
(11, '1', NULL),
(12, '2', NULL),
(13, '3', NULL),
(14, '4', NULL),
(15, '4', NULL),
(16, '4', NULL),
(17, '1', NULL),
(18, '2', NULL),
(19, '3', NULL),
(20, '4', NULL),
(21, '5', NULL),
(22, '4', NULL),
(23, '3', NULL),
(24, '2', NULL),
(25, '1', NULL),
(26, '3', NULL),
(27, '2', NULL),
(28, '1', NULL),
(29, '5', NULL),
(30, '5', NULL),
(31, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(32, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(33, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(34, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(35, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(36, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(37, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(38, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(39, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(40, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(41, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(42, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(43, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(44, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(45, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(46, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(47, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(48, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(49, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(50, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(51, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(52, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(53, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(54, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(55, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(56, '5', 'd7c91164c41e6644b5c9b0e07ac1bf69e55a15dc'),
(57, '1', 'd7c91164c41e6644b5c9b0e07ac1bf69e55a15dc'),
(58, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(59, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(60, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(61, '5', 'b06f89e0189c05125270fd9c74eb6e1e60bf957d'),
(62, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(63, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(64, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(65, '5', '5622233a3796543a7318564290a3f968d596557f'),
(66, '5', '5622233a3796543a7318564290a3f968d596557f'),
(67, '5', 'ae6ac6007dd71e619bea471438a5a5e1ea8abacd'),
(68, '5', 'ae6ac6007dd71e619bea471438a5a5e1ea8abacd'),
(69, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(70, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(71, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(72, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(73, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(74, '5', 'f5c5ee386b828aaab8bf310e501c27578e588e9c'),
(75, '5', '741d8c1aa6adec9b94036ef4f13ff40e4f2c4041'),
(76, '5', 'ae6ac6007dd71e619bea471438a5a5e1ea8abacd'),
(77, '5', '741d8c1aa6adec9b94036ef4f13ff40e4f2c4041'),
(78, '5', '741d8c1aa6adec9b94036ef4f13ff40e4f2c4041'),
(79, '5', '741d8c1aa6adec9b94036ef4f13ff40e4f2c4041'),
(80, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(81, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(82, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(83, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(84, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(85, '2', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(86, '3', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(87, '4', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(88, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(89, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(90, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(91, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(92, '3', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(93, '1', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(94, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(95, '5', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(96, '4', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(97, '3', '752a33dbe0414288a5e8463a002b60b7b32ddaea'),
(98, '5', '5622233a3796543a7318564290a3f968d596557f'),
(99, '5', '5622233a3796543a7318564290a3f968d596557f'),
(100, '5', '5622233a3796543a7318564290a3f968d596557f'),
(101, '5', '5622233a3796543a7318564290a3f968d596557f'),
(102, '5', '5622233a3796543a7318564290a3f968d596557f'),
(103, '5', '5622233a3796543a7318564290a3f968d596557f'),
(104, '5', '5622233a3796543a7318564290a3f968d596557f'),
(105, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(106, '4', '339b4f522faccdab0ba234e78553e98fdada6904'),
(107, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(108, '2', '339b4f522faccdab0ba234e78553e98fdada6904'),
(109, '1', '339b4f522faccdab0ba234e78553e98fdada6904'),
(110, '1', '339b4f522faccdab0ba234e78553e98fdada6904'),
(111, '1', '339b4f522faccdab0ba234e78553e98fdada6904'),
(112, '1', '339b4f522faccdab0ba234e78553e98fdada6904'),
(113, '1', '339b4f522faccdab0ba234e78553e98fdada6904'),
(114, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(115, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(116, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(117, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(118, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(119, '5', '339b4f522faccdab0ba234e78553e98fdada6904'),
(120, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(121, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(122, '4', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(123, '3', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(124, '2', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(125, '1', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(126, '4', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(127, '3', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(128, '1', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(129, '1', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(130, '1', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(131, '1', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(132, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(133, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(134, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(135, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(136, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(137, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(138, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(139, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(140, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(141, '5', '5111742e9f3a87fe318c22e6ba7f0d944dbdf4f5'),
(142, '5', 'ae6ac6007dd71e619bea471438a5a5e1ea8abacd'),
(143, '4', 'ae6ac6007dd71e619bea471438a5a5e1ea8abacd');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
