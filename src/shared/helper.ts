import { Injectable } from "@angular/core"
import { DomSanitizer } from "@angular/platform-browser"

@Injectable()
export class Helper {
  constructor(private sanitizer: DomSanitizer) {

  }
  safeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
