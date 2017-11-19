import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SightService } from '../../services/swagger/api/sight.service';
import { Flag } from '../../models/flag';

@Component({
  selector: 'app-media-page',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  media: Flag;
  id: string;

  constructor(private route: ActivatedRoute,
              private sightService: SightService) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.media = this.sightService.getSight(this.id);
    console.log(this.media);
  }
}
