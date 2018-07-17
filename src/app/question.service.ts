import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous

  data = [
      {
        "subEntityId": "SE39",
        "sequenceId": 1,
        "orderNumber": 1,
        "nameOfSubEntityField": "Name of college/institute",
        "subentityFieldType": "Text",
        "value": "test",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y"
      },
      {
        "subEntityId": "SE34",
        "sequenceId": 1,
        "orderNumber": 2,
        "nameOfSubEntityField": "Course/Degree name",
        "subentityFieldType": "Text",
        "value": "NA",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y"
      },
      {
        "subEntityId": "SE35",
        "sequenceId": 1,
        "orderNumber": 3,
        "nameOfSubEntityField": "Specialization",
        "subentityFieldType": "Text",
        "value": "NA",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y"
      },
      {
        "subEntityId": "SE76",
        "sequenceId": 1,
        "orderNumber": 6,
        "nameOfSubEntityField": "Type of Education",
        "subentityFieldType": "SelectList",
        "value": "NA",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y",
        "SelectList": [
          {
            "itemDescription": "Full Time",
            "itemValue": "FULLTM"
          },
          {
            "itemDescription": "Part Time",
            "itemValue": "PARTTM"
          },
          {
            "itemDescription": "Distance Learning",
            "itemValue": "DISTLERN"
          },
          {
            "itemDescription": "Pursuing",
            "itemValue": "PURSUE"
          }
        ]
      },
      {
        "subEntityId": "SE19",
        "sequenceId": 1,
        "orderNumber": 7,
        "nameOfSubEntityField": "Address line 1",
        "subentityFieldType": "Text",
        "value": "test",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y"
      },
      {
        "subEntityId": "SE20",
        "sequenceId": 1,
        "orderNumber": 8,
        "nameOfSubEntityField": "Address line 2",
        "subentityFieldType": "Text",
        "value": "-",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "N"
      },
      {
        "subEntityId": "SE21",
        "sequenceId": 1,
        "orderNumber": 9,
        "nameOfSubEntityField": "City",
        "subentityFieldType": "Text",
        "value": "test",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y"
      },
      {
        "subEntityId": "SE22",
        "sequenceId": 1,
        "orderNumber": 10,
        "nameOfSubEntityField": "State",
        "subentityFieldType": "Text",
        "value": "test",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y"
      },
      {
        "subEntityId": "SE23",
        "sequenceId": 1,
        "orderNumber": 11,
        "nameOfSubEntityField": "Country",
        "subentityFieldType": "SelectList",
        "value": "BH",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y",
        "SelectList": [
          {
            "itemDescription": "Argentina",
            "itemValue": "AR"
          },
          {
            "itemDescription": "Australia",
            "itemValue": "AU"
          },
          {
            "itemDescription": "Austria",
            "itemValue": "AT"
          },
          {
            "itemDescription": "Azerbaijan",
            "itemValue": "AZ"
          },
          {
            "itemDescription": "Bahrain",
            "itemValue": "BH"
          },
          {
            "itemDescription": "Bangladesh",
            "itemValue": "BD"
          },
          {
            "itemDescription": "Belgium",
            "itemValue": "BE"
          },
          {
            "itemDescription": "Bhutan",
            "itemValue": "BT"
          },
          {
            "itemDescription": "Brazil",
            "itemValue": "BR"
          },
          {
            "itemDescription": "Cameroon",
            "itemValue": "CM"
          },
          {
            "itemDescription": "Canada",
            "itemValue": "CA"
          },
          {
            "itemDescription": "Chile",
            "itemValue": "CL"
          },
          {
            "itemDescription": "China",
            "itemValue": "CN"
          },
          {
            "itemDescription": "Colombia",
            "itemValue": "CO"
          },
          {
            "itemDescription": "Costa Rica",
            "itemValue": "CR"
          },
          {
            "itemDescription": "Czechoslovakia",
            "itemValue": "CZ"
          },
          {
            "itemDescription": "Denmark",
            "itemValue": "DK"
          },
          {
            "itemDescription": "Egypt",
            "itemValue": "EG"
          },
          {
            "itemDescription": "El Salvador",
            "itemValue": "SV"
          },
          {
            "itemDescription": "Europe",
            "itemValue": "EU"
          },
          {
            "itemDescription": "FINLAND",
            "itemValue": "FI"
          },
          {
            "itemDescription": "France",
            "itemValue": "FR"
          },
          {
            "itemDescription": "Germany",
            "itemValue": "DE"
          },
          {
            "itemDescription": "Ghana",
            "itemValue": "GH"
          },
          {
            "itemDescription": "Honduras",
            "itemValue": "HN"
          },
          {
            "itemDescription": "Hong Kong",
            "itemValue": "HK"
          },
          {
            "itemDescription": "Hungary",
            "itemValue": "HU"
          },
          {
            "itemDescription": "India ",
            "itemValue": "IND"
          },
          {
            "itemDescription": "Indonesia",
            "itemValue": "ID"
          },
          {
            "itemDescription": "Ireland",
            "itemValue": "IE"
          },
          {
            "itemDescription": "Israel",
            "itemValue": "IL"
          },
          {
            "itemDescription": "Israel",
            "itemValue": "IL"
          },
          {
            "itemDescription": "Italy",
            "itemValue": "IT"
          },
          {
            "itemDescription": "Japan ",
            "itemValue": "JP"
          },
          {
            "itemDescription": "Jordan",
            "itemValue": "JO"
          },
          {
            "itemDescription": "Kazakhstan",
            "itemValue": "KZ"
          },
          {
            "itemDescription": "Kenya",
            "itemValue": "KE"
          },
          {
            "itemDescription": "Korea",
            "itemValue": "KP"
          },
          {
            "itemDescription": "Luxembourg",
            "itemValue": "LU"
          },
          {
            "itemDescription": "Malaysia",
            "itemValue": "MY"
          },
          {
            "itemDescription": "Malta",
            "itemValue": "MAT"
          },
          {
            "itemDescription": "Mexico",
            "itemValue": "MX"
          },
          {
            "itemDescription": "Minsk",
            "itemValue": "BL"
          },
          {
            "itemDescription": "Myanmar",
            "itemValue": "MM"
          },
          {
            "itemDescription": "NONE",
            "itemValue": "NONE"
          },
          {
            "itemDescription": "Netherlands",
            "itemValue": "NL"
          },
          {
            "itemDescription": "New Zealand",
            "itemValue": "NZ"
          },
          {
            "itemDescription": "Nigeria",
            "itemValue": "NG"
          },
          {
            "itemDescription": "No Preference",
            "itemValue": "NOPREF"
          },
          {
            "itemDescription": "Norway",
            "itemValue": "NO"
          },
          {
            "itemDescription": "Oman",
            "itemValue": "OM"
          },
          {
            "itemDescription": "Pakistan",
            "itemValue": "PKT"
          },
          {
            "itemDescription": "Palestine",
            "itemValue": "PS"
          },
          {
            "itemDescription": "Peru",
            "itemValue": "PE"
          },
          {
            "itemDescription": "Philippines",
            "itemValue": "PHI"
          },
          {
            "itemDescription": "Poland",
            "itemValue": "PL"
          },
          {
            "itemDescription": "Portugal",
            "itemValue": "PT"
          },
          {
            "itemDescription": "Qatar",
            "itemValue": "QA"
          },
          {
            "itemDescription": "Romania",
            "itemValue": "RO"
          },
          {
            "itemDescription": "Russia",
            "itemValue": "RU"
          },
          {
            "itemDescription": "Rwanda",
            "itemValue": "RW"
          },
          {
            "itemDescription": "Saudi Arabia",
            "itemValue": "SA"
          },
          {
            "itemDescription": "Singapore",
            "itemValue": "SG"
          },
          {
            "itemDescription": "Slovakia",
            "itemValue": "SK"
          },
          {
            "itemDescription": "South Africa",
            "itemValue": "ZA"
          },
          {
            "itemDescription": "South Korea",
            "itemValue": "KR"
          },
          {
            "itemDescription": "Spain",
            "itemValue": "ES"
          },
          {
            "itemDescription": "SriLanka",
            "itemValue": "LK"
          },
          {
            "itemDescription": "Sweden",
            "itemValue": "SE"
          },
          {
            "itemDescription": "Switzerland",
            "itemValue": "SZ"
          },
          {
            "itemDescription": "Thailand",
            "itemValue": "TH"
          },
          {
            "itemDescription": "Tiwan",
            "itemValue": "TW"
          },
          {
            "itemDescription": "Trinidad 1",
            "itemValue": "TT"
          },
          {
            "itemDescription": "Tunisia",
            "itemValue": "TN"
          },
          {
            "itemDescription": "Turkey",
            "itemValue": "TR"
          },
          {
            "itemDescription": "UAE",
            "itemValue": "AE"
          },
          {
            "itemDescription": "UGANDA",
            "itemValue": "UG"
          },
          {
            "itemDescription": "USA",
            "itemValue": "USA"
          },
          {
            "itemDescription": "Ukraine",
            "itemValue": "UA"
          },
          {
            "itemDescription": "United Kingdom",
            "itemValue": "GB"
          },
          {
            "itemDescription": "Venezuela",
            "itemValue": "VE"
          },
          {
            "itemDescription": "Vietnam",
            "itemValue": "VN"
          },
          {
            "itemDescription": "Yemen",
            "itemValue": "YE"
          },
          {
            "itemDescription": "Zambia",
            "itemValue": "ZM"
          }
        ]
      },
      {
        "subEntityId": "SE24",
        "sequenceId": 1,
        "orderNumber": 12,
        "nameOfSubEntityField": "Pincode / Zip code",
        "subentityFieldType": "Text",
        "value": "666455",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y"
      },
      {
        "subEntityId": "SE38",
        "sequenceId": 1,
        "orderNumber": 13,
        "nameOfSubEntityField": "Actual percentage / CGPA",
        "subentityFieldType": "Number",
        "value": "88",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y"
      },
      {
        "subEntityId": "SE60",
        "sequenceId": 1,
        "orderNumber": 14,
        "nameOfSubEntityField": "Name of the University/Board",
        "subentityFieldType": "Text",
        "value": "test",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y"
      },
      {
        "subEntityId": "SE200",
        "sequenceId": 1,
        "orderNumber": 15,
        "nameOfSubEntityField": "Do you have documents as proof of education?",
        "subentityFieldType": "RadioButton",
        "value": "YES",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y",
        "SelectList": [
          {
            "itemDescription": "Yes",
            "itemValue": "YES"
          },
          {
            "itemDescription": "No",
            "itemValue": "NO"
          }
        ]
      },
      {
        "subEntityId": "SE222",
        "sequenceId": 1,
        "orderNumber": 16,
        "nameOfSubEntityField": "Education name",
        "subentityFieldType": "SelectList",
        "value": "NA",
        "entityDataId": 26099,
        "branchId": "BR1",
        "mandatory": "Y",
        "SelectList": [
          {
            "itemDescription": "Graduation",
            "itemValue": "GR"
          },
          {
            "itemDescription": "Post Graduation",
            "itemValue": "PGR"
          }
        ]
      }
    ];
  getQuestions() {

   

    let questions: QuestionBase<any>[] = []
    // = [
    //   new DropdownQuestion({
    //     key: 'brave',
    //     label: 'Bravery Rating',
    //     options: [
    //       {key: 'solid',  value: 'Solid'},
    //       {key: 'great',  value: 'Great'},
    //       {key: 'good',   value: 'Good'},
    //       {key: 'unproven', value: 'Unproven'}
    //     ],
    //     order: 3
    //   }),

    //   new DropdownQuestion({
    //     key: 'brave1',
    //     label: 'Bravery Rating2',
    //     options: [
    //       {key: 'solid',  value: 'Solid'},
    //       {key: 'great',  value: 'Great'},
    //       {key: 'good',   value: 'Good'},
    //       {key: 'unproven', value: 'Unproven'}
    //     ],
    //     order: 3
    //   }),


    //   [new TextboxQuestion({
    //     key: 'firstName',
    //     label: 'First name',
    //     value: 'Bombasto',
    //     required: true,
    //     order: 1
    //   }),

    //   new TextboxQuestion({
    //     key: 'emailAddress',
    //     label: 'Email',
    //     type: 'email',
    //     order: 2
    //   })
    // ];

    questions.push( new TextboxQuestion({ 
      label:" d.nameOfSubEntityField",
      key:" d.nameOfSubEntityField",
      value: 'Bombasto',
      required: true,
      controlType: 'radio',
      order: 1
    }),
)

    for (let d of this.data) {
      if(d.subentityFieldType === 'Text')
      {
        questions.push( new TextboxQuestion({
         
          label: d.nameOfSubEntityField,
          key: d.nameOfSubEntityField,
          value: 'Bombasto',
          required: d.mandatory === 'Y' ? true : false,
          order: 1
        }),
  )
      }

      if(d.subentityFieldType === 'SelectList')
      {
        questions.push(  new DropdownQuestion({
          key: d.nameOfSubEntityField,
          label: d.nameOfSubEntityField,
          required: d.mandatory === 'Y' ? true : false,
          options: d.SelectList,
          order: 3
        }),
  )
      }
  }
  

    return questions.sort((a, b) => a.order - b.order);
  }
}