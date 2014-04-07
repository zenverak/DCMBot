function dcm() {
    var choice;

    function pfft() {
        var num,
            count = 0,
            pft = "p";
        num = prompt("How many times should you say f?");
        for (count = 0; count < num; count++) {
            pft += "f";
        }
        pft += "t. Uggla Stanks";
        console.log(pft);


    }

    function rando(top, bottom) {
        return Math.floor(Math.random() * top + bottom);
    }

    function objCount(obj) {
        var bra,
            count=0;
        for (bra in obj) {
            count++;
        }
        return count;
    }

    function lineup() {
        var team = {
            1: {
                name: "Freddie Freeman",
                used: false,
                onTeam: true
            },
            2: {
                name: "BJ Upton",
                used: false,
                onTeam: true
            },
            3: {
                name: "Justin Upton",
                used: false,
                onTeam: true
            },
            4: {
                name: "Evan Gattis",
                used: false,
                onTeam: true
            },
            5: {
                name: "Chris Johnson",
                used: false,
                onTeam: true
            },
            6: {
                name: "Dan Uggla",
                used: false,
                onTeam: true
            },
            7: {
                name: "Alex Wood",
                used: false,
                onTeam: true
            },
            8: {
                name: "David Hale",
                used: false,
                onTeam: true
            },
            9: {
                name: "Luis Avilan",
                used: false,
                onTeam: true
            },
            10: {
                name: "Pedro Beato",
                used: false,
                onTeam: true
            },
            11: {
                name: "David Carpenter",
                used: false,
                onTeam: true
            },
            12: {
                name: "Aaron Harang",
                used: false,
                onTeam: true
            },
            13: {
                name: "Gus Schlosser",
                used: false,
                onTeam: true
            },

            14: {
                name: "Julio Teheran",
                used: false,
                onTeam: true
            },
            15: {
                name: "Ian Thomas",
                used: false,
                onTeam: true
            },
            16: {
                name: "Anthony Varvaro",
                used: false,
                onTeam: true
            },
            17: {
                name: "Ryan Doumit",
                used: false,
                onTeam: true
            },
            18: {
                name: "Gerald Laird",
                used: false,
                onTeam: true
            },
            19: {
                name: "Tyler Pastornicky",
                used: false,
                onTeam: true
            },
            20: {
                name: "Ramiro Pena",
                used: false,
                onTeam: true
            },
            21: {
                name: "Andrelton Simmons",
                used: false,
                onTeam: true
            },
            22: {
                name: "Jason Heyward",
                used: false,
                onTeam: true
            },
            23: {
                name: "Jordan Schafer",
                used: false,
                onTeam: true
            }
        },
            chosen = [],
            i,
            tLen = objCount(team),
            rand;

        function ifUsed(ranNum) {
            var hr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 1, 1, 1, 1],
                hrLen = hr.length,
                name,
                newNum;
            if (team[ranNum].used === false) {
                name = team[ranNum].name;
                if (rando(9, 1) === 1) {
                    name += "s";
                }
                if (Math.floor(rando(13, 3) === 3)) {
                    name += " hits " + hr[rando(hrLen, 1)] + " homeruns.";
                }
                chosen.push(name);
                team[ranNum].used = true;
            } else {
                newNum = rando(tLen, 1);
                ifUsed(newNum);
            }
        }
        for (i = 0; i < 9; i++) {
            rand = rando(tLen, 1);
            ifUsed(rand);
        }
        for(i=0;i<9;i++){
			console.log=(chosen[i]);
		}
    }

    function score() {
        var enemy,
            bScore = 0,
            eScore = 0;
        enemy = prompt("Who are the braves?");
        bScore = rando(8, 1);
        eScore = rando(16, 4);
        if (bScore > eScore) {
            console.log("Braves " + enemy);
            console.log(bScore + "    " + eScore);
            console.log("not a bad episode");
        } else {
            console.log("Braves " + enemy);
            console.log(bScore + "    " + eScore);
            console.log("This episode stanks");
        }

    }

    function puke() {
        var food = ["Subway", "McDonalds", "Chinese", "Mexicans", "Japanese", "Burger King", "Captain D's", "Dairy Queen", "Chick Fil A", "Arbys", "Chicken Noodle Soup"],
            fLen = food.length;
        console.log("I just threw up " + food[rando(fLen, 0)]);

    }
    while (true) {

        console.log("Chose what to do in this Episode from the following options.");
        choice = prompt("Type 1 for PFFT program. 2 for lineup program, 3 for Score program, 4 for what he puked, 5 to quit");
        switch (parseInt(choice, 10)) {
        case 1:
            pfft();
            break;
        case 2:
            lineup();
            break;
        case 3:
            score();
            break;
        case 4:
            puke();
            break;
        case 5:
            return false;
        }
    }
}
dcm();