import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataService } from '../sogeti-common/services/data.service';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let service: DataService;

  beforeEach(async(() => {
    service = new DataService(null, null);
    TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      imports: [ FormsModule,
        MatInputModule,
        MatButtonModule,
        MatListModule
        ],
      providers: [service]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //  it('should create', () => {
  //    expect(component).toBeTruthy();
  //  });
});
