export const db = {
    user_screen: [
        {
            name : 'Welcome Screen',
            image_path : '../assets/image1.jpg',
            title_event : 'My Event'
        },
        {
            name : 'Question 1',
            question_title : 'Enter question title here',
            question_description : 'Choose only one of the options below. When you have made your selection tap SUBMIT.',
            question_instruction : 'INSTRUCTION',
            options : [
                {    
                    options_Annotation : 'A',
                    options_title : 'option 1'
                },
                {    
                    options_Annotation : 'B',
                    options_title : 'option 2'
                },
                {    
                    options_Annotation : 'C',
                    options_title : 'option 3'
                },
                {    
                    options_Annotation : 'D',
                    options_title : 'option 4'
                }
            ],
            routing : 'question1',
            button :[
                {
                    type : 'reset',
                    button_title : 'Reset',
                    routing : '../question1'
                },
                {
                    type : 'button',
                    button_title : 'Submit',
                    routing : '../'
                }
            ]
        },
        {
            name : 'Question 2',
            question_title : 'Enter question title here',
            question_description : 'Choose only one of the options below. When you have made your selection tap SUBMIT.',
            question_instruction : 'INSTRUCTION',
            options : [
                {    
                    options_Annotation : 'A',
                    options_title : 'option 1'
                },
                {    
                    options_Annotation : 'B',
                    options_title : 'option 2'
                },
                {    
                    options_Annotation : 'C',
                    options_title : 'option 3'
                },
                {    
                    options_Annotation : 'D',
                    options_title : 'option 4'
                }
            ],
            routing : 'question2',
            button :[
                {
                    type : 'reset',
                    button_title : 'Reset',
                    event : '',
                    routing : '../question2'
                },
                {
                    type : 'button',
                    button_title : 'Submit',
                    event : 'onsubmit()',
                    routing : '../'
                }
            ]
        },
        {
            name : 'Question 3',
            question_title : 'Enter question title here',
            question_description : 'Choose only one of the options below. When you have made your selection tap SUBMIT.',
            question_instruction : 'INSTRUCTION',
            routing : 'question3',
            result : '',
            button :[
                {
                    type : 'reset',
                    button_title : 'Reset',
                    routing : '../question3'
                },
                {
                    type : 'submit',
                    button_title : 'Submit',
                    routing : '../'
                }
            ]
        },
        {
            name : 'Question 4',
            question_title : 'Enter question title here',
            question_description : 'Choose only one of the options below. When you have made your selection tap SUBMIT.',
            question_instruction : 'INSTRUCTION',
            options : [
                {    
                    options_Annotation : 'A',
                    options_title : 'option 1',
                    value : 0
                },
                {    
                    options_Annotation : 'B',
                    options_title : 'option 2',
                    value : 1
                },
                {    
                    options_Annotation : 'C',
                    options_title : 'option 3',
                    value : 2
                },
                {    
                    options_Annotation : 'D',
                    options_title : 'option 4',
                    value : 3
                }
            ],
            routing : 'question4',
            button :[
                {
                    type : 'reset',
                    button_title : 'Reset',
                    routing : '../question1'
                },
                {
                    type : 'button',
                    button_title : 'Submit',
                    routing : '../'
                }
            ]
        },
        {
            name : 'Question 5',
            routing : 'remapping',
        }
    ],
    fac_screen :[
        {
            name : 'Welcome Screen',
            image_path : '../assets/image1.jpg',
            title_event : 'My Event'
        },
        {
            name : 'Question 1 Result',
            question_title : 'Enter question title here',
            question_description : 'Choose only one of the options below. When you have made your selection tap SUBMIT.',
            question_instruction : 'INSTRUCTION',
            options : [
                {    
                    options_title : 'option 1'
                },
                {    
                    options_title : 'option 2'
                },
                {   
                    options_title : 'option 3'
                },
                {
                    options_title : 'option 4'
                }
            ],
            routing : 'ssresult',
        },
        {
            name : 'Question 1 FB',
            question_title : 'Enter question title here',
            question_description : 'Choose only one of the options below. When you have made your selection tap SUBMIT.',
            question_instruction : 'INSTRUCTION',
            options : [
                {    
                    options_title : 'option 1'
                },
                {    
                    options_title : 'option 2'
                },
                {   
                    options_title : 'option 3'
                },
                {
                    options_title : 'option 4'
                }
            ],
            routing : 'ssrfeedback',
        },
        {
            name : 'Question 2 Result',
            question_title : 'Enter question title here',
            question_description : 'Choose only one of the options below. When you have made your selection tap SUBMIT.',
            question_instruction : 'INSTRUCTION',
            options : [
                {    
                    options_title : 'option 1'
                },
                {    
                    options_title : 'option 2'
                },
                {   
                    options_title : 'option 3'
                },
                {
                    options_title : 'option 4'
                }
            ],
            routing : 'msresult'
        },
        {
            name : 'Question 3 Result',
            routing : ''
        },
        {
            name : 'Question 4 Result',
            routing : ''
        }
    ]
}