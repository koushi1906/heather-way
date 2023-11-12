import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface List {
  amenity: string
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  about: string = `Welcome to Heatherway Apartments. Strict qualification requirements. We are a community located in the Downtown Arlington Area. Enjoy our large apartments and our beautifully manicured courtyards. We have easy access to Interstate 30 and Highway 360. Nearby attractions include Arlington Music Hall, Levitt Pavilion, Symphony Arlington, Arlington Theater, Knapp Heritage Park, J.R. Bentley's, J Gilligan's, The Grease Monkey Burger Shop, Tipsy Oak, Old School Pizza Tavern, and many more Downtown Arlington attractions. Welcome home. Everyone wants to live here.
  Heatherway Apartments is an apartment community located in Tarrant County and the 76013 ZIP Code. This area is served by the Arlington Independent attendance zone.`;

  list: List[] = [
    {
      amenity: 'laundry facilities'
    },
    {
      amenity: 'Online services'
    },
    {
      amenity: 'maintenance on site'
    },
    {
      amenity: 'lounge'
    },
    {
      amenity: 'gated'
    },
    {
      amenity: 'courtyard'
    },
    {
      amenity: 'zen garden '
    },
    {
      amenity: 'vintage building'
    },
    {
      amenity: 'picnic area'
    },
    {
      amenity: '24 hour access'
    },
    {
      amenity: 'pool'
    },
    {
      amenity: 'property manager on site'
    }

  ];

  flist:List[] = [
    {amenity:'hardwood floors'},
    {amenity:'office'},
    {amenity:'carpet'},
    {amenity:'walk-in closets'},
    {amenity:'vinyl flooring'},
    {amenity:'dining room'},
    {amenity:'loft layout'},
    {amenity:'family room'},
    {amenity:'window coverings'},
    {amenity:'balcony'},
    {amenity:'porch'},
    {amenity:'garden'},
  ]

  hlist:List[] =[
    {amenity:'dishwasher'},
    {amenity:'High speed internet acecess'},
    {amenity:'ceiling fans'},
    {amenity:'air conditioning'},
    {amenity:'smoke free'},
    {amenity:'heating'},
    {amenity:'cable ready'},
    {amenity:'tub/shower'},
    {amenity:'oven'},
    {amenity:'Island kitchen'},
    {amenity:'refrigerator'},
    {amenity:'eat-in kitchen'},
  ]


  constructor(private router: Router) { }
  view() {
    this.router.navigate(['gallery']);
  }
}
