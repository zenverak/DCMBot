
#include <stdio.h>
#define PLAYERS 19
#define BREAK \n
int pfft(void);
int lineup(void);
int score(void);
int main(void)
{
    int choice;

    printf("Choose what to do in this Episode from the following options.\n");
    printf("1. Pfft program\n2. Line Up Program\n3. Score Program.\n");
    scanf("%d", &choice);
    switch(choice)
    {
        case 1:
        pfft();
        break;
       case 2:
        lineup();
        break;
       case 3:
        score();
        break;
    }




}


int pfft(void)
 {

  char f='f';
    char p='p';
    char t='t';
    int num, count;
    printf("\nEnter the number of times you want f to appear\n");
    scanf("%d", &num);
    printf("\n");
    printf("   %c",p);
    for(count = 0; count<num;count++)
        printf("%c",f);
    printf("%c Uggla Stanks\n\n", t);
    main();
 }
int lineup(void)
 {
    char *players[19]={"Justin Upton","BJ Upton","Dan Uggla","Brian McCann","Evan Gattis","Ramiro Pena",
    "Tim Hudson","Chris Johnson","Reed Johnson","Jason Heyward", "Andrelton Simmons",
    "Gerald Laird","Tyler Pastornicky","Paul Janish","Paul Maholm","Mike Minor", "Julio Teheran","Fredie Freeman"
    ,"Jordan Schafer"};

     int bat,count,homer,ht,s,tr,braves;
     printf("\nLineup for this episode\n");
     tr =0;

     for(bat=0,count=0;count<9;count++)
      {
            bat= rand()%(PLAYERS);
            s=rand()%PLAYERS;
            homer=rand()%9;
            ht=rand()%22+1;

            if(bat == s)
                printf("%d. %ss",count+1, players[bat]);
            else
                printf("%d. %s",count+1, players[bat]);

            if(bat==homer)
                    printf("  and he will have %d Homer Simpsons\n", ht);
            else
                    printf("\n");


      }
      printf("\n");
      main();



 }

int score(void)
    {
        int teams, countt, countb, braves;
        char tname[20];
        teams=rand()%16;
        braves = rand()%9;
        printf("Print the name of the team the Braves play in this Episode:\n");
        scanf("%s", &tname);

        for(countt=0;countt<25;countt++)
            printf("*");
        printf("\n");
        printf("          Score       \n\n");
        printf("  %s     Braves\n",tname);
        printf("     %d           %d\n", teams, braves);
           for(countb=0;countb<25;countb++)
            printf("*");
         printf("\n\n");
        main();

    }
