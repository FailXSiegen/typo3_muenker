<?php
/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2017 Felix Herrmann <info@failx.de>
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

namespace Failx\FxMuenker\ViewHelpers;

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractTagBasedViewHelper;
use TYPO3\CMS\Extbase\DomainObject\DomainObjectInterface;
use TYPO3\CMS\Extbase\Persistence\ObjectStorage;
use TYPO3Fluid\Fluid\Core\Rendering\RenderingContextInterface;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * Class TextColorViewHelper
 * @package Failx\FxMuenker\ViewHelpers
 */
class TextColorViewHelper extends AbstractTagBasedViewHelper
{
    public function initializeArguments() : void
    {
        parent::initializeArguments();
        $this->registerArgument('color', 'string', 'color', true);
    }

    public static function renderStatic(
        array $arguments,
        \Closure $renderChildrenClosure,
        RenderingContextInterface $renderingContext
    ) {
        $color_array = self::HexToRGB($arguments['color']);
        $mittelwert = ($color_array['r']+$color_array['g']+$color_array['b']) / 3;

        if ($mittelwert > 127) {
            $text_color = '#444';
        } else {
            $text_color = '#ddd';
        }
        return $text_color;
    }

    protected static function HexToRGB($hex)
    {
        $hex = str_replace("#", "", $hex);
        $color = array();
        if (strlen($hex) == 3) {
            $color['r'] = hexdec(substr($hex, 0, 1) . $r);
            $color['g'] = hexdec(substr($hex, 1, 1) . $g);
            $color['b'] = hexdec(substr($hex, 2, 1) . $b);
        } elseif (strlen($hex) == 6) {
            $color['r'] = hexdec(substr($hex, 0, 2));
            $color['g'] = hexdec(substr($hex, 2, 2));
            $color['b'] = hexdec(substr($hex, 4, 2));
        }
        
        return $color;
    }
    
    /**
     * Converts the given rhb to a contrast textcolor
     *
     * @param string $r
     * @param string $g
     * @param string $b
     * @return string
     */
    private function RGBToHex($r, $g, $b)
    {
        //String padding bug found and the solution put forth by Pete Williams (http://snipplr.com/users/PeteW)
        $hex = "#";
        $hex.= str_pad(dechex($r), 2, "0", STR_PAD_LEFT);
        $hex.= str_pad(dechex($g), 2, "0", STR_PAD_LEFT);
        $hex.= str_pad(dechex($b), 2, "0", STR_PAD_LEFT);
        
        return $hex;
    }
}
