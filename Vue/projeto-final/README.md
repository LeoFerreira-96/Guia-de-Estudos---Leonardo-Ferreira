Antes de Tudo devemos definir e planejar o Aplicativo.

## DATA ##
-coach:
    lista de Coach
        coach
            Id.[coachId]
            nome.[name]
            sobrenome.[lastName]
            preço.[cost]
            descrição.[description]

-requests
    lista de conversas
        conversas
            Id.[coachId]
            Mensagem.[message]
            E-mail.[email]
        

## LAYOUT ##

    url     |       compoente

/coaches    ->      coachesList
/coahces/:id ->     coachDetails
/register   ->      coachRegistration
/contact    ->      contactCoach
/request    ->      requestReceived
