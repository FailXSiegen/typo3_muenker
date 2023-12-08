<?php
namespace Riconet\RiGlossar\Domain\Model;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2014
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
use TYPO3\CMS\Extbase\Annotation\Validate;
use TYPO3\CMS\Extbase\Annotation\ORM\Cascade;
use TYPO3\CMS\Extbase\Domain\Model\FileReference;
use TYPO3\CMS\Extbase\DomainObject\AbstractEntity;
use TYPO3\CMS\Extbase\Persistence\ObjectStorage;

/**
 * Glossar
 *
 * @package ri_glossar
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 */
class Glossar extends AbstractEntity {

	/**
  * Title for head tags
  *
  * @var string
  * @Validate(validator="NotEmpty")
  */
 protected $title = '';

	/**
	 * Normal Title
	 *
	 * @var string
	 */
	protected $h1 = '';

	/**
  * Filename for URL rewrite
  *
  * @var string
  * @Validate(validator="NotEmpty")
  */
 protected $filename = '';

	/**
  * Main content
  *
  * @var string
  * @Validate(validator="NotEmpty")
  */
 protected $maintext = '';

	/**
	 * Description for head tags
	 *
	 * @var string
	 */
	protected $description = '';

    /**
     * images
     *
     * @var ObjectStorage<FileReference>
     * @Cascade("remove")
     */
    protected $images = null;
    
    /**
     * media
     *
     * @var ObjectStorage<FileReference>
     * @Cascade("remove")
     */
    protected $media = null;

    /**
     * Class constructor.
     *
     * @return void
     */
    public function __construct()
    {
        $this->initStorageObjects();
    }

    /**
     * Initializes all objectStorage properties.
     *
     * @return void
     */
    protected function initStorageObjects()
    {
        $this->media = new ObjectStorage();
        $this->images = new ObjectStorage();
    }
    
	/**
	 * Returns the title
	 *
	 * @return \string $title
	 */
	public function getTitle() {
		return $this->title;
	}

	/**
	 * Sets the title
	 *
	 * @param \string $title
	 * @return void
	 */
	public function setTitle($title) {
		$this->title = $title;
	}

	/**
	 * Returns the h1
	 *
	 * @return \string $h1
	 */
	public function getH1() {
		return $this->h1;
	}

	/**
	 * Sets the h1
	 *
	 * @param \string $h1
	 * @return void
	 */
	public function setH1($h1) {
		$this->h1 = $h1;
	}

	/**
	 * Returns the filename
	 *
	 * @return \string $filename
	 */
	public function getFilename() {
		return $this->filename;
	}

	/**
	 * Sets the filename
	 *
	 * @param \string $filename
	 * @return void
	 */
	public function setFilename($filename) {
		$this->filename = $filename;
	}

	/**
	 * Returns the maintext
	 *
	 * @return string $maintext
	 */
	public function getMaintext() {
		return $this->maintext;
	}

	/**
	 * Sets the maintext
	 *
	 * @param string $maintext
	 * @return void
	 */
	public function setMaintext($maintext) {
		$this->maintext = $maintext;
	}

	/**
	 * Returns the description
	 *
	 * @return string $description
	 */
	public function getDescription() {
		return $this->description;
	}

	/**
	 * Sets the description
	 *
	 * @param string $description
	 * @return void
	 */
	public function setDescription($description) {
		$this->description = $description;
	}

	/**
     * Adds a Image
     *
     * @param FileReference $image
     * @return void
     */
    public function addImage(FileReference $image)
    {
        $this->images->attach($image);
    }
    
    /**
     * Removes a Image
     *
     * @param FileReference $imageToRemove The Image to be removed
     * @return void
     */
    public function removeImage(FileReference $imageToRemove)
    {
        $this->images->detach($imageToRemove);
    }
    
    /**
     * Returns the images
     *
     * @return ObjectStorage<FileReference> $images
     */
    public function getImages()
    {
        return $this->images;
    }
    
    /**
     * Sets the media
     *
     * @param ObjectStorage<FileReference> $images
     * @return void
     */
    public function setImages(ObjectStorage $image)
    {
        $this->images = $image;
    }
    
    /**
     * Adds a Media
     *
     * @param FileReference $media
     * @return void
     */
    public function addMedia($media)
    {
        $this->media->attach($media);
    }
    
    /**
     * Removes a Media
     *
     * @param FileReference $imageToRemove The Media to be removed
     * @return void
     */
    public function removeMedia($imageToRemove)
    {
        $this->media->detach($imageToRemove);
    }
    
    /**
     * Returns the media
     *
     * @return ObjectStorage<FileReference> $media
     */
    public function getMedia()
    {
        return $this->media;
    }
    
    /**
     * Sets the media
     *
     * @param ObjectStorage<FileReference> $media
     * @return void
     */
    public function setMedia($media)
    {
        $this->media = $media;
    }

}