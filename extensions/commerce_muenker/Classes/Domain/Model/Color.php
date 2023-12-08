<?php

namespace Failx\CommerceMuenker\Domain\Model;

/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2017 Wolf Utz <utz@riconet.de>, riconet
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
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

use TYPO3\CMS\Extbase\DomainObject\AbstractEntity;
use TYPO3\CMS\Extbase\Persistence\ObjectStorage;

/**
 * Color
 */
class Color extends AbstractEntity
{
    
    /**
     * ralColor
     *
     * @var string
     */
    protected $ralColor = '';
    
    /**
     * ralText
     *
     * @var string
     */
    protected $ralText = '';
    
    /**
     * rgbCode
     *
     * @var string
     */
    protected $rgbCode = '';
    
    /**
     * Returns the ralColor
     *
     * @return string $ralColor
     */
    public function getRalColor()
    {
        return $this->ralColor;
    }
    
    /**
     * Sets the ralColor
     *
     * @param string $ralColor
     * @return void
     */
    public function setRalColor($ralColor)
    {
        $this->ralColor = $ralColor;
    }
    
    /**
     * Returns the ralText
     *
     * @return string $ralText
     */
    public function getRalText()
    {
        return $this->ralText;
    }
    
    /**
     * Sets the ralText
     *
     * @param string $ralText
     * @return void
     */
    public function setRalText($ralText)
    {
        $this->ralText = $ralText;
    }
    
    /**
     * Returns the rgbCode
     *
     * @return string $rgbCode
     */
    public function getRgbCode()
    {
        return $this->rgbCode;
    }
    
    /**
     * Sets the rgbCode
     *
     * @param string $rgbCode
     * @return void
     */
    public function setRgbCode($rgbCode)
    {
        $this->rgbCode = $rgbCode;
    }
}
