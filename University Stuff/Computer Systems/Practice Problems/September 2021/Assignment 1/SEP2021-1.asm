; Napisati program na asemblerskom jeziku koji izracunava vrednost izraza:
; ([9 - (3*2)] + [25 - (5*4)] + [49 - (7*6)] + ... + [n^2 - (n * (n-1))])/(-n + 1)
; gde je n 16-bitni neparan broj dat na lokaciji N, a vrednost brojioca najvise 32-bitni podatak.
; Kolicnik smestiti na lokaciju KOL, a ostatak na lokaciju OST. Dati primer ulaznog podatka i
; ocekivane vrednosti medjurezultata i konacnog rezultata. 
;
; Napomena: Nije dozvoljeno koristiti nizove

PODACI SEGMENT
    N DW 5             ;Broj ponavljanja N  
    SUM DD 0 
    KOL DW 2 dup(0)
    OST DW 2 dup(0)
PODACI ENDS
KOD SEGMENT  
    assume CS: kod, DS: podaci 
START: 
       
    ; Ucitavamo DS             
    MOV AX, PODACI
    MOV DS, AX
    
    XOR AX,AX ;resetujemo AX za dalje koriscenje 
    MOV CX, 3  ; Pocinjemo od n = 3
    
  PETLJA:  
    XOR BX, BX          ; Resetujemo BX
    MOV BX, N
    CMP CX, BX         ; Postavlja flagove za ispitivanje uslova skoka
    JG END             ; Ako je n > N, skace na END
    
    ;Ako je n <= N nastavlja izvrsvanje
    MOV BX, CX         ; BX = n
    
    MOV DX, BX         ; DX = n
    DEC DX             ; DX = (n - 1)
    
    MOV AX, BX         ; AX = n
    MUL DX             ; AX = n * (n - 1)
    
    MOV BX, AX         ; BX = n * (n - 1)
    MOV AX, CX         ; AX = n
    MUL AX             ; AX = n * n  
    SUB AX, BX         ; AX = n^2 - (n * (n - 1))
    
    MOV BX, AX         ; Smestamo vrednost AX u BX kako bi resetovali AX
    
    MOV AX, SUM        ; Nizi bajt SUM
    MOV DX, SUM + 2    ; Visi bajt SUM
    
    ADD AX, BX         ; SUM += (n^2 - (n * (n - 1))
    ADC DX, 0          ; Prenos ide u DX
          
    ; Suma se cuva u memoriju      
    MOV SUM, AX
    MOV SUM+2, DX      
    
    ADD CX, 2          ; n += 2
    
    JMP PETLJA          ; While petlja
    
    END:
    ; Delimo sumu sa -n + 1 i premestamo kolicnik i rezultat u odgovarajuce memorijske lokacije
            
    ; Resetovanje registara
    XOR AX, AX
    XOR BX, BX
    XOR CX, CX
    XOR DX, DX
    
    MOV AX, N          ; AX = n
    MOV CX, -1
    MUL CX             ; AX = -n
    INC AX             ; AX = -n + 1
    
    MOV BX, AX         ; BX = -n + 1
    
    ; Suma u CX:AX
    MOV AX, SUM
    MOV DX, SUM + 2
    
    IDIV BX
    
    MOV OST, DX
    MOV KOL, AX
    
    MOV AH, 4CH
    INT 21H       
           
KOD ENDS
END START