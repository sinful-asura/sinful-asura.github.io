; Design a program using assembly 8086 language which evaluates, without transforming, the following expression: 
;
; ([9 - (3*2)] + [25 - (5*4)] + [49 - (7*6)] + ... + [n^2 - (n * (n-1))])/(-n + 1)
; 
; n is a 16bit odd number in memory location N, while numerator is at most a 32bit value.
; Store the quotient at location QOT and the remainder at location REM.
; Give an example of input value, intermediate results and expected value.
;
; Note: Usage of strings (arrays) is not permited.
 
 
 
 
DATA SEGMENT
    N DW 5             ; Iteration count  
    SUM DD 0 
    QOT DW 2 dup(0)
    REM DW 2 dup(0)
DATA ENDS
CODE SEGMENT  
    assume CS: CODE, DS: DATA 
START: 
       
    ; Load DS value             
    MOV AX, DATA
    MOV DS, AX
        
        
    XOR AX,AX  ; Reset AX 
    MOV CX, 3  ; Starting with n = 3
       
       
  _LOOP:  
    XOR BX, BX         ; Reset BX
    MOV BX, N
    CMP CX, BX         ; Set flags for conditional check
    JG _END             ; If n > N, jump to _END
    
    
    MOV BX, CX         ; BX = n
    MOV DX, BX         ; DX = n
    DEC DX             ; DX = (n - 1)
       
       
    MOV AX, BX         ; AX = n
    MUL DX             ; AX = n * (n - 1)
        
        
    MOV BX, AX         ; BX = n * (n - 1)
    MOV AX, CX         ; AX = n
    MUL AX             ; AX = n * n  
    SUB AX, BX         ; AX = n^2 - (n * (n - 1))

    
    MOV AX, SUM        ; SUM_LOW
    MOV DX, SUM + 2    ; SUM_HIGH
        
        
    ADD AX, BX         ; SUM += (n^2 - (n * (n - 1))
    ADC DX, 0          ; If there was a carry, we add it to higher word
       
          
    ; Store SUM to memory      
    MOV SUM, AX
    MOV SUM+2, DX      
       
       
    ADD CX, 2          ; n += 2
       
       
    JMP _LOOP          ; Assembly while loop
       
       
    _END: 
    ; Reset registers
    XOR AX, AX
    XOR BX, BX
    XOR CX, CX
    XOR DX, DX
        
        
    MOV AX, N          ; AX = n
    MOV CX, -1
    MUL CX             ; AX = -n
    INC AX             ; AX = -n + 1
         
         
    MOV BX, AX         ; BX = -n + 1
         
         
    ; Sum is in DX
    MOV AX, SUM
    MOV DX, SUM + 2
          
          
    IDIV BX
    
          
    MOV QOT, AX      
    MOV REM, DX
           
           
    MOV AH, 4CH
    INT 21H       
       
           
CODE ENDS
END START