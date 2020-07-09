import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ArticlePreview } from '../../models/articlePreview';

@Component({
  selector: 'app-podcast-preview-item',
  templateUrl: './podcast-preview-item.component.html',
  styleUrls: ['./podcast-preview-item.component.css']
})
export class PodcastPreviewItemComponent implements OnInit {

  @Input() podcastPreview: ArticlePreview;
  safeUrl: SafeUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.getEmbedUrl(this.podcastPreview);
  }

  getEmbedUrl(podcastPreview: ArticlePreview): SafeUrl{
    return this.sanitizer.bypassSecurityTrustResourceUrl(podcastPreview.previewImage);
  }

}
