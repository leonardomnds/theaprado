import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({ selector: 'img' })
export class LazyImgDirective implements AfterViewInit {

  private elementRef: ElementRef<HTMLImageElement> = inject(ElementRef<HTMLImageElement>);

  ngAfterViewInit() {
    const imgElement = this.elementRef.nativeElement;
    const originalSrc = imgElement.src;

    imgElement.setAttribute('data-src', originalSrc);
    imgElement.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) { img.setAttribute('src', src); }
          observer.unobserve(img);
        }
      });
    });

    observer.observe(imgElement);
  }

}
