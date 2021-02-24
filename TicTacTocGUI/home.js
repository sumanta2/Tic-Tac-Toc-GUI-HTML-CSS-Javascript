var user=0 ;
var move=0;
var winck=0;
var ary=[ [9,9,9],[9,9,9],[9,9,9]];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
function hello(i,j,l,m)
{  
	if(winck==0) 
	{
		if(ary[i][j]==9)
		{
			move++;
			document.querySelector("#mv").innerText="move no: "+move;
			tmp=(user+1)%2;
			document.querySelector("#use").innerText="For user: "+tmp;
			if(user==0)
			{
				document.querySelector(l).style.display="inline-block";
				user=1;
				ary[i][j]=0;
				k=0;
				wincheck(i,j,k);
			}
			else
			{
				document.querySelector(m).style.opacity=1;
				user=0;
				ary[i][j]=1;
				k=1
				wincheck(i,j,k)
			}
			if(winck==0)
			{
				drawCheck();
			}
		}
		else
		{
			alert("You cannot edit previous input.");
		}
	}
	else
	{
		alert("Someone win this match or draw this game,plz refresh to play this game in next time");
	}
}
function winmsg()
{
	
	temp=(user+1)%2
	document.querySelector("h2").innerText=temp+" no player win this match.";
	document.querySelector("h2").style.display="inline-block";
	document.querySelector("#use").innerText="Match complited"
	winck=1;
}
function wincheck(i,j,value)
{
    if(i==0 && j==0)
	{
		module1(value);
		module2(value);
		module3(value);
	}
	else if(i==0 && j==1)
	{
		module2(value);
		module4(value);
	}
	else if(i==0 && j==2)
	{
		module2(value);
		module5(value);
		module6(value);
	}
	else if(i==1 && j==0)
	{
		module3(value);
		module7(value);
	}
	else if(i==1 && j==1)
	{
		module1(value);
		module4(value);
		module6(value);
		module7(value);
	}
	else if(i==1&&j==2)
	{
		module5(value);
		module7(value);
	}
	else if(i==2&&j==0)
	{
		module3(value);
		module6(value);
		module8(value);
	}
	else if(i==2&&j==1)
	{
		module4(value);
		module8(value);
	}
	else if(i==2&&j==2)  //else is not magnetary in 
	{
		module1(value);
		module5(value);
		module8(value);	
	}
}
function module1(value)
{
    //alert("Module1");
    if(ary[0][0]==value &&ary[1][1]==value&&ary[2][2]==value)
    {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        winmsg()
    }
}
function module2(value)
{
    if(ary[0][0]==value&&ary[0][1]==value&&ary[0][2]==value)
    {
        winmsg() 
    }
}
function module3(value)
{
    if(ary[0][0]==value&&ary[1][0]==value&&ary[2][0]==value)
    {
        winmsg()
    }
}
function module4(value)
{
	if(ary[0][1]==value&&ary[1][1]==value&&ary[2][1]==value)
	{
        winmsg()
    }
}
function module5(value)
{
	if(ary[0][2]==value&&ary[1][2]==value&&ary[2][2]==value)
	{
        winmsg()
    }
}
function module6(value)
{
	if(ary[0][2]==value&&ary[1][1]==value&&ary[2][0]==value)
	{
        winmsg()
    }
} 
function module7(value)
{
	if(ary[1][0]==value&&ary[1][1]==value&&ary[1][2]==value)
	{
        winmsg()
    }
}
function module8(value)
{
	if(ary[2][0]==value&&ary[2][1]==value&&ary[2][2]==value)
	{
        winmsg()
    }
}
function drawCheck()
{
	if(ary[0][0]==9||ary[0][1]==9||ary[0][2]==9||ary[1][0]==9||ary[1][1]==9||ary[1][2]==9||ary[2][0]==9||ary[2][1]==9||ary[2][2]==9)
	{
	}
	else
	{
		document.querySelector("#use").innerText="Match complited"
		document.querySelector("h2").innerText="The match are drawen";
		document.querySelector("h2").style.display="inline-block";
	}	
}