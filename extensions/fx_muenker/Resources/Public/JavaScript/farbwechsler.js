let ismobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 991;

document.addEventListener('DOMContentLoaded', function() {
    const firstProductColor = document.querySelector('.PViewer .product_color');
    if (firstProductColor) {
        firstProductColor.classList.add('colorpicked');
        firstProductColor.style.display = 'block';
    }

    document.querySelectorAll('.colors li').forEach(li => {
        li.addEventListener('click', function() {
            const id = this.id.replace('article_id_', '');
            document.querySelector('.colorpicked').classList.remove('colorpicked');
            document.querySelectorAll('.PViewer .product_color').forEach(el => el.style.display = 'none');
            const article = document.getElementById(`article_${id}`);
            if (article) {
                article.classList.add('colorpicked');
                article.style.display = 'block';
            }
        });
    });

    const ralInfo = document.querySelector('.ral_info');
    const ralInfoContent = document.querySelector('.ral_infocontent');
    const box = document.querySelector('.box');
    const colorwave2 = document.querySelector('.colorwave2');

    if (ismobile) {
        ralInfo.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                ralInfoContent.style.display = 'none';
                box.style.display = 'block';
                colorwave2.style.display = 'block';
                this.classList.remove('active');
            } else {
                ralInfoContent.style.display = 'block';
                box.style.display = 'none';
                colorwave2.style.display = 'none';
                this.classList.add('active');
            }
        });
    } else {
        ralInfo.addEventListener('mouseenter', function() {
            ralInfoContent.style.display = 'block';
            box.style.display = 'none';
            colorwave2.style.display = 'none';
        });
        ralInfo.addEventListener('mouseleave', function() {
            ralInfoContent.style.display = 'none';
            box.style.display = 'block';
            colorwave2.style.display = 'block';
        });
    }

	const loader = document.querySelector('.loader');
	const sNeg = document.querySelector('.s_neg');
	const negativ = document.querySelector('.negativ');
	const positiv = document.querySelector('.positiv');

	if (loader) loader.style.display = 'none';
	if (sNeg) sNeg.classList.add('selected');
	if (negativ) negativ.style.display = 'block';
	if (positiv) positiv.style.display = 'none';

	const sPos = document.querySelector('.s_pos');

	if (sNeg) {
		sNeg.addEventListener('click', function() {
			switchView('negativ', 'positiv', 'neg');
		});
	}

	if (sPos) {
		sPos.addEventListener('click', function() {
			switchView('positiv', 'negativ', 'pos');
		});
	}

	function switchView(showClass, hideClass, showButton) {
		const switcher = document.querySelector('.switcher');
		const showElements = document.querySelectorAll('.' + showClass);
		const hideElements = document.querySelectorAll('.' + hideClass);
		const selectedButton = document.querySelector('.s_' + showButton);

		document.querySelectorAll('.s_neg, .s_pos').forEach(el => el.classList.remove('selected'));
		if (selectedButton) selectedButton.classList.add('selected');

		if (switcher) switcher.style.display = 'block';
		
		hideElements.forEach(el => {
			el.style.display = 'none';
		});
		
		showElements.forEach(el => {
			el.style.display = 'block';
		});
		setTimeout(() => {
			if (switcher) switcher.style.display = 'none';
		}, 300);
	}

    document.querySelector('.s_2d').addEventListener('click', function(e) {
        e.preventDefault();
        switchTyp('2d');
    });

    document.querySelector('.s_3d').addEventListener('click', function(e) {
        e.preventDefault();
        switchTyp('3d');
    });

    function switchTyp(type) {
        const s3d = document.querySelector('.s_3d');
        const s2d = document.querySelector('.s_2d');
        const titleColor = document.querySelector('.title_color');
        const colorpicked = document.querySelector('.colorpicked');
        const cad = document.querySelector('.cad');

        if (type === '2d') {
            s3d.style.backgroundPosition = '0px -48px';
            s2d.style.backgroundPosition = '0px -48px';
            titleColor.style.display = 'none';
            colorpicked.style.display = 'none';
            cad.style.display = 'block';
            s2d.classList.add('aktiv');
            s3d.classList.remove('aktiv');
            colorwave2.style.display = 'none';
            ralInfo.style.display = 'none';
        } else {
            s3d.style.backgroundPosition = '0px 0px';
            s2d.style.backgroundPosition = '0px 0px';
            cad.style.display = 'none';
            colorpicked.style.display = 'block';
            s3d.classList.add('aktiv');
            s2d.classList.remove('aktiv');
            titleColor.style.display = 'block';
            colorwave2.style.display = 'block';
            ralInfo.style.display = 'block';
        }
    }

    // Colors hover effect
    if (!ismobile) {
        const colors = document.querySelector('.colors');
        const colorItems = document.querySelectorAll('.colors li');

        colors.addEventListener('mouseenter', () => {
            colorItems.forEach(item => {
                item.style.transition = 'padding-top 100ms';
                item.style.paddingTop = '15px';
            });
        });

        colors.addEventListener('mouseleave', () => {
            colorItems.forEach(item => {
                item.style.transition = 'padding-top 500ms';
                item.style.paddingTop = '0';
            });
        });

        colorItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transition = 'padding-top 100ms';
                item.style.paddingTop = '40px';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transition = 'padding-top 500ms';
                item.style.paddingTop = '15px';
            });
        });
    }
});