-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mar. 09 avr. 2019 à 15:40
-- Version du serveur :  5.7.25
-- Version de PHP :  7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user` varchar(256) NOT NULL,
  `message` varchar(256) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `user`, `message`, `date`) VALUES
(1, 'Kevin Whipaloo', 'Les meilleures toilettes de Paris', '2019-04-09 11:48:39'),
(2, 'Kevin Whipaloo', 'Les meilleures toilettes de Paris', '2019-04-09 11:48:39'),
(3, 'Kevin Whipaloo', 'Les meilleures toilettes de Paris', '2019-04-09 11:48:39'),
(5, 'Quentin', 'Waw', '2019-04-09 12:07:30'),
(7, 'Raphaerl', 'Ces toilettes sont super propre', '2019-04-09 13:36:06'),
(9, 'dgehz', 'znhdjzz', '2019-04-09 16:43:57'),
(10, 'Thomas', 'Ces toilettes m\'ont sauvé la vie !', '2019-04-09 16:53:06'),
(15, 'Raph', 'Bien', '2019-04-09 17:10:11'),
(29, 'Rom1', 'Acceptable', '2019-04-09 17:32:44');

-- --------------------------------------------------------

--
-- Structure de la table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `rate` enum('1','2','3','4','5') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `rating`
--

INSERT INTO `rating` (`id`, `rate`) VALUES
(1, '3'),
(2, '5'),
(3, '3'),
(4, '4'),
(5, '5'),
(6, '5');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT pour la table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
