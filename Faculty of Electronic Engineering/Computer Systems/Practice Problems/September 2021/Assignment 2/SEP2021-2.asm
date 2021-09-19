; Design an assembly 8086 program which determines the count of words in a sentence beginning at memory address TXT,
; that contain exactly 3 letters 'a', either capital or not ('a' or 'A'). Consider the words in the sentence to be
; separated by a single blank character and that the sentence ends with a '.' character.
; Memory access is to be realized using string manipulation instructions exclusively!
;
; Provide an example of input data and expected output.
DATA SEGMENT
    SENTENCE db 'Anal kanaa Velik KanAal PenAAal KAaAaAaMen. aaa'     ; Sentence Example  
    TXT db 0        ; Start of the sentence (the sentence must be terminated by a '.' character!) 
DATA ENDS
CODE SEGMENT  
    assume CS: CODE, DS: DATA, ES: DATA
_START:
            
    MOV AX, DATA
    MOV DS, AX
    MOV ES, AX
    XOR AX,AX 
            
    ; DS:SI - Source String
    ; ES:DI - Destination String      
    
    
    CLD     ; Direction flag = 0 -> Left to Right
    LEA SI, SENTENCE
    XOR BL, BL  ; BL <- Number of words in a sentence containing exactly three characters 'a' or 'A'
    
   _RESET:
    XOR AH, AH ; AH <- Current count of 'a' or 'A' characters
   _LOAD_NEXT:        
    LODSB   ; AL <- Current Character
         
    
    CMP AL, '.'
    JE _END_OF_PROGRAM
    
    CMP AL, ' '
    JE _IS_BLANK
    
    CMP AL, 'A'
    JE _INC_COUNT
    
    CMP AL, 'a'
    JE _INC_COUNT   
    JMP _LOAD_NEXT
    
    
   _INC_COUNT:
    INC AH
    JMP _LOAD_NEXT
    
   _IS_BLANK:
    CMP AH, 3
    JE _RES_INC
    JMP _RESET
    
   _RES_INC:
    INC BL
    JMP _RESET
    
    
    
   _END_OF_PROGRAM:
    ; If the last word in the sentence satisfies the condition, it will fail to be registered
    ; since checks are only done on blank characters, which is why we need to do another check
    CMP AH, 3
    JNE _SKIP 
    INC BL
    
      
   _SKIP:        
    MOV AH, 4CH
    INT 21H       
           
CODE ENDS
END _START

; Example:
; /----------------------------------------------------------------------------------------\
;| Sentence: 'Anal kanaa Velik KanAal PenAAal KAaAaAaMen. aaa'                              |
;|                                                                                          |
;| TXT Value: 0                                                                             |
;|                                                                                          |
;| (Note: Sentence has to be defined first in order for it to begin from its very start,    |
;| as sentence will be written from memory address 0 up to its length. If something else    |
;| is defined before the sentence, the program will work, but the result may be misleading).|
;|                                                                                          |
;| Expected output (value stored in register):  3                                           |
; \----------------------------------------------------------------------------------------/