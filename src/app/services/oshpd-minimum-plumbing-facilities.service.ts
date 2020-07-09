import { Injectable } from '@angular/core';
import {Oshpd} from "../Interfaces/oshpd-minimum-plumbing-facilities";

@Injectable({
  providedIn: 'root'
})
export class OSHPDMinimumPlumbingFacilitiesService {
  minimumFacility4_2: Map<string, Oshpd[]> = new Map<string, Oshpd[]>(
    [
      ["Administration Lobby", [
          {id: 1, name: "Public Toilet - Male"},
          {id: 2, name: "Public Toilet - Femalee"},
          {id: 3, name: "Airborne infection isolation room"},
          {id: 4, name: "Airborne infection isolation treatment/exam room"},
          {id: 5, name: "Airborne infection isolation anteroom"},
          {id: 6, name: "Airborne infection isolation toilet room"},
          {id: 7, name: "Cardiac Catheterization procedure room	"},
          {id: 8, name: "Central Sterile Supply"},
        ]
      ],
      [
        "Cesarean/Delivery Service Space", [
          {id: 9, name: "Labor Rooms"},
          {id: 10, name: "Recovery Room"},
          {id: 11, name: "Drug distribution station"},
          {id: 12, name: "Cesarean operating room"},
          {id: 13, name: "Delivery room"},
        ]
      ],
      [
        "Staff lounge", [
          {id: 14, name: "Staff Toilet - Male"},
          {id: 15, name: "Staff Toilet - Female"},
          {id: 16, name: "LDR or LDRP room"},
        ]
      ],
      [
        "Waiting area/room", [
          {id: 17, name: "Public Toilet - Male"},
          {id: 18, name: "Public Toilet - Female"},
          {id: 19, name: "Clinical Laboratory Service Space"},
        ]
      ],
      [
        "Dietetic Service Space", [
          {id: 20, name: "Dietetic Service Space"},
          {id: 21, name: "Kitchen"},
          {id: 22, name: "Food serving area"},
          {id: 23, name: "Food Preparation"},
          {id: 24, name: "Dietary Staff Toilet - Male"},
          {id: 25, name: "Dietary Staff Toilet - Female"},
        ]
      ],
      [
        "Emergency Service", [
          {id: 26, name: "Emergency Service"},
          {id: 27, name: "Open plan"},
          {id: 28, name: "Observation unit(s)"},
          {id: 29, name: "Trauma/Cardiac, Emergency surgery, Cystoscopy, Cast Room"},          
        ]
      ],
      [
        "Intensive Care Units", [
          {id: 30, name: "Intensive Care Units"},
          {id: 31, name: "Open plan"},
          {id: 32, name: "Patient rooms"},
        ],
      ],
      ["Newborn Intensive Care Unit (NICU)", [
          {id: 33, name: "Newborn Intensive Care Unit (NICU)"},
          {id: 34, name: "Treatment area/room"},
          {id: 35, name: "Control station"},  
        ]
      ],
      [
        "Staff lounge", [
          {id: 36, name: "Staff Toilet - Male"},
          {id: 37, name: "Staff Toilet- Female"},
        ]
      ],
      [
        "Employee dressing rooms and lockers", [
          {id: 38, name: "Staff Toilet - Male"},
          {id: 39, name: "Staff Toilet - Female"},
        ]
      ],
      [
        "Exam and treatment rooms", [
          {id: 40, name: "Exam and treatment rooms"},
        ]
      ],
      [
        "Housekeeping room", [
          {id: 41, name: "Housekeeping room"},
        ]
      ],
      [
        "Laboratories", [
          {id: 42, name: "Laboratories"},
        ]
      ],
      [
        "Laundry soiled linen, receiving, holding and sorting", [
          {id: 43, name: "Laundry soiled linen, receiving, holding and sorting"}
        ]
      ],
      [
        "Medicine preparation room", [
          {id: 44, name: "Medicine preparation room"}
        ]
      ],
      [
        "Morgue and Autopsy	", [
          {id: 45, name: "Morgue and Autopsy"}
        ]
      ],
      [
        "Nourishment area", [
          {id: 46, name: "Nourishment area"}
        ]
      ],
      [
        "Nuclear Medicine room",[
          {id: 47, name: "Nuclear Medicine room"},
          {id: 48, name: "Mold room"}
        ]
      ],
      [
        "Patient room", [
          {id: 49, name: "Patient room"}
        ]
      ],
      [
        "Patient toilet and bath facilities", [
          {id: 50, name: "Patient toilet and bath facilities"}
        ]
      ],
      [
        "Central bathing facility", [
          {id: 51, name: "Central bathing facility"}
        ]
      ],
      [
        "Special bathing facility", [
          {id: 52, name: "Special bathing facility"}
        ]
      ],
      [
        "Nurse Station", [
          {id: 53, name: "Nurse Station"}
        ]
      ],
      [
        "Newborn/well baby nursery", [
          {id: 54, name: "Newborn/well baby nursery"}
        ]
      ],
      [
        "Workroom", [
          {id: 55, name: "Workroom"}
        ]
      ],
      [
        "Gastrointestinal endoscopy procedure room", [
          {id: 56, name: "Gastrointestinal endoscopy procedure room"}
        ]
      ],
      [
        "Outpatient observation", [
          {id: 57, name: "Outpatient observation"}
        ]
      ],
      [
        "Pediatric and Adolescent Unit toilet room", [
          {id: 58, name: "Pediatric and Adolescent Unit toilet room"}
        ]
      ],
      [
        "Pharmacy", [
          {id: 59, name: "Pharmacy"},
          {id: 60, name: "Open plan"},
          {id: 61, name: "Compounding area for parenteral solutions"},
        ]
      ],
      [
        "Postanesthesia care units (PACU)", [
          {id: 62, name: "Postanesthesia care units (PACU)"},
          {id: 63, name: "Open plan"},
          {id: 64, name: "Individual rooms"}
        ]
      ],
      [
        "Protective environment room", [
          {id: 65, name: "Protective environment room"}
        ]
      ],
      [
        "Protective environment anteroom", [
          {id: 66, name: "Protective environment anteroom"}
        ]
      ],
      [
        "Protective environment toilet room", [
          {id: 67, name: "Protective environment toilet room"}
        ]
      ],
      [
        "Psychiatric unit patient room", [
          {id: 68, name: "Psychiatric unit patient room"}
        ]
      ],
      [
        "Radiological/Imaging Services Space", [
          {id: 69, name: "Radiological/Imaging Services Space"},
          {id: 70, name: "Mammography"},
          {id: 71, name: "Interventional imaging"},
          {id: 72, name: "Ultrasound"},
          {id: 73, name: "Angiography"},
          {id: 74, name: "Fluoroscopy"},
          {id: 75, name: "Staff Toilet - Male"},
          {id: 76, name: "Staff Toilet - Female"},
        ]
      ],
      [
        "Rehabilitation Therapy Space", [
          {id: 77, name: "Training toilet"},
          {id: 78, name: "Physical therapy service space"},
          {id: 79, name: "Occupational therapy service space"},
          {id: 80, name: "Speech pathology"},
        ]
      ],
      [
        "Infusion Therapy", [
          {id: 81, name: "Infusion Therapy"}
        ]
      ],
      [
        "Renal Dialysis Service Space", [
          {id: 82, name: "Bloodborne Infection Isolation Room"},
          {id: 83, name: "Nurses\' station"},
          {id: 84, name: "Medication dispensing"},
          {id: 85, name: "Home training room"},
          {id: 86, name: "Repair room"},
          {id: 87, name: "Dialysis patient toilet"},
          {id: 88, name: "Staff Toilet - Male"},
          {id: 89, name: "Staff Toilet - Female"},
        ]
      ],
      [
        "Surgical Service Space", [
          {id: 90, name: "Surgical Service Space"},
          {id: 91, name: "Staff Toilet - Male"},
          {id: 92, name: "Staff Toilet - Female"},
          {id: 93, name: "Clean-up rooms"},
          {id: 94, name: "Substerile area"},
          {id: 95, name: "Anesthesia workroom"},
          {id: 96, name: "Soiled workroom or soiled holding"},
          {id: 97, name: "Cancer treatment/infusion therapy treatment"},
        ]
      ],
      [
        "Utility/Work Room", [
          {id: 98, name: "Clean"},
          {id: 99, name: "Soiled"},
        ]
      ],
      [
        "Patient beds [Skilled Nursing/Intermediate Care Facilities] [medical model]", [
          {id: 100, name: "Patient beds [Skilled Nursing/Intermediate Care Facilities] [medical model]"},  
        ]
      ],
      [
        "Patient toilet and bath facilities [Correctional Treatment Center]", [
          {id: 101, name: "Patient toilet and bath facilities [Correctional Treatment Center]"},  
        ]
      ],
      [
        "Airborne infection isolation anteroom [Correctional Treatment Center]", [
          {id: 102, name: "Airborne infection isolation anteroom [Correctional Treatment Center]"},  
        ]
      ],
      [
        "Airborne infection isolation anteroom [Correctional Treatment Center]", [
          {id: 103, name: "Airborne infection isolation anteroom [Correctional Treatment Center]"},  
        ]
      ],
      [
        "Protective environment room [Correctional Treatment Center]", [
          {id: 104, name: "Protective environment room [Correctional Treatment Center]"},  
        ]
      ],
      [
        "Protective environment anteroom [Correctional Treatment Center]", [
          {id: 105, name: "Protective environment anteroom [Correctional Treatment Center]"},  
        ]
      ],
    ]
  );

  constructor() { }

  getTable4_2Map(): Map<string, Oshpd[]>{
    return this.minimumFacility4_2;
  }

  getOshpd(id: number): Oshpd {
    this.minimumFacility4_2.forEach((value: Oshpd[], key: string) => {
      value.forEach(oshpd => {
        if(oshpd.id == id){
          return oshpd;
        }
      });
    });
    return null;
  }
}
