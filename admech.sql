-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2024 a las 05:24:54
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `admech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id` int(11) NOT NULL,
  `titulo` varchar(20) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `correo` varchar(320) NOT NULL,
  `telefono` varchar(30) NOT NULL,
  `whatsapp` varchar(20) NOT NULL,
  `redes_sociales` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `titulo`, `descripcion`, `direccion`, `correo`, `telefono`, `whatsapp`, `redes_sociales`) VALUES
(1, 'Contactanos', 'Utiliza el siguiente formulario para contactarnos. Te responderemos a la brevedad.\r\nAproximadamente 50 años ', 'Marte #3', 'contacto@empresa.cl', '111111', '+56 9 222222222', '{\"nombre\":[\"linkedin\",\"youtube\",\"instagram\",\"twitter\",\"facebook\",\"twitch\"],\"url\":[\"https:\\/\\/www.linkedin.com\\/company\\/investaraucania\",\"https:\\/\\/www.youtube.com\\/@investaraucania\",\"https:\\/\\/www.instagram.com\\/investaraucania\\/\",\"http:\\/\\/twitter.com\\/investaraucania\",null,null],\"icono\":[\"bx bxl-linkedin\",\"bx bxl-youtube\",\"bx bxl-instagram\",\"bx bxl-twitter\",\"bx bxl-facebook\",\"bx bxl-twitch\"]}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `valor` int(11) NOT NULL,
  `imagen_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `valor`, `imagen_url`) VALUES
(1, 'Cámara Digital', 350, 'https://imagenes.elpais.com/resizer/v2/3MQDXQBNBVA6RCNZMUQYYCKSTI.jpg?auth=57ef3d61d26288f994e6cd4fc7cfa470d43cc7c96a372c7347d5a5361b6bd5f0&width=414'),
(2, 'Teléfono Inteligente', 799, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OSMFOF_OJWDfTILpuyT6qHvaUHaw_A-URg&s'),
(3, 'Portátil', 1200, 'https://talca.solutekla.com/photo/1/hp/portatiles/portatil_core_i5_8gb/portatil_core_i5_8gb_0001'),
(6, 'Pollito_Con_Papas', 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFd2PbiFUiWntspnr8w6j-GfB8x9HnABSlQ&s'),
(7, 'Producto A', 200, '0'),
(8, 'Producto B', 340, '0'),
(9, 'Producto C', 540, '0'),
(10, 'Cámara ', 2, '0'),
(11, 'Producto D', 456, '0'),
(12, 'BelisariusCawl', 99999, 'https://m.media-amazon.com/images/I/715hp492YjL._AC_SL1500_.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `email` varchar(200) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `estado` int(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `email`, `clave`, `estado`) VALUES
(1, 'Webmaster', 'BelisariusCawl@AdMech.cl', '$2b$10$/0ZvJiHA41wjDE3CiPkCDeJHA8RT4bYdOtB7tSQ22ymMqrP1xE/LO', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `video`
--

INSERT INTO `video` (`id`, `nombre`, `url`) VALUES
(1, 'Waking Dread', 'https://www.youtube.com/watch?v=PY4ZMLXwD6A');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
