import { AfterViewInit, Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({ selector: 'img' })
export class LazyImgDirective implements OnInit, AfterViewInit {

  private elementRef: ElementRef<HTMLImageElement> = inject(ElementRef<HTMLImageElement>);

  ngOnInit(): void {
    const imgElement = this.elementRef.nativeElement;
    const originalSrc = imgElement.src;

    imgElement.classList.remove(LOADED_CLASS);
    imgElement.setAttribute('data-src', originalSrc);
    imgElement.setAttribute('src', 'assets/images/placeholder.png');
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');

          if (src) {
            img.setAttribute('src', src);
            img.classList.add(LOADED_CLASS);
          }

          observer.unobserve(img);
        }
      });
    });

    observer.observe(this.elementRef.nativeElement);
  }

}

const LOADED_CLASS = 'loaded';
