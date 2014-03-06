
<%@ page language="java" import="org.json.*" %>
<%@ page language="java" import="java.sql.*" %>
<%@ page language="java" import="java.util.ArrayList" %>

<%
Connection conn = null;
Statement stmt = null, stmt2=null;
ArrayList<String> country=null,country2=null;
ArrayList<Integer> area=null,area2=null,area3=null;
JSONObject successJSONObj,toptenJSONObj;

try
{	
  	Class.forName("com.ibm.db2.jcc.DB2Driver");
    conn = DriverManager.getConnection("jdbc:db2://bluforcloud.imdemocloud.com:50001/BLUDB",
    		"gauravke","Bluforcloud85$");
    if(!conn.isClosed())
		System.out.println("Successfully connected to "+ "MySQL server using TCP/IP..."); 	
	
    //out.println("connected....!!");


	stmt = conn.createStatement();
	String sql= "SELECT * FROM FOREST_AREA";
	ResultSet rs = stmt.executeQuery(sql);
	country = new ArrayList<String>();
	area = new ArrayList<Integer>();


	while(rs.next())
	{
	  country.add(rs.getString(1));
	  area.add(Integer.parseInt(rs.getString(5)));
	  
	//  System.out.println("country "+ rs.getString(1));
	//  System.out.println("Area "+ rs.getString(5));
	//fetch data from database and store in different arrays
	}
	
	stmt2 = conn.createStatement();
	String sql2 = "Select * From FOREST_AREA where Country IN ('"+"Brazil',"+"'Indonesia',"+"'Sudan',"+"'Myanmar',"+"'Nigeria',"
			+"'Mexico',"+"'Zimbabwe',"+"'Argentina')";
	ResultSet rs2 = stmt2.executeQuery(sql2);
	country2 = new ArrayList<String>();
	area2 = new ArrayList<Integer>();
	area3 = new ArrayList<Integer>();


	while(rs2.next())
	{
	  country2.add(rs2.getString(1));
	  area2.add(Integer.parseInt(rs2.getString(2)));
	  area3.add(Integer.parseInt(rs2.getString(5)));
	  
	  System.out.println("country "+ rs2.getString(1));
	  System.out.println("Area "+ rs2.getString(2));
	//fetch data from database and store in different arrays
	}

	rs.close();
	stmt.close();
	
	rs2.close();
	stmt2.close();
	conn.close();
	
	}catch(SQLException se){
	//Handle errors for JDBC
	se.printStackTrace();
	}
	catch(Exception e){
	//Handle errors for Class.forName
	e.printStackTrace();
	}finally{
	//finally block used to close resources
		try{
		   if(stmt!=null)
		      stmt.close();
		   if(stmt2!=null)
			   stmt2.close();
		}catch(SQLException se2){
	 }// nothing we can do
	try{
	   if(conn!=null)
	       conn.close();
	  }catch(SQLException se){
	     se.printStackTrace(); }
	  }//end finally try

	String x[] = new String[country.size()];
	int y[] = new int[area.size()];

	for(int i=0;i< country.size();i++)
	  {
		x[i] = country.get(i);
		y[i] = area.get(i);  
	  }
	
	String x2[] = new String[country2.size()];
	int y2[] = new int[area2.size()];
	int y3[] = new int[area3.size()];

	for(int i=0;i< country2.size();i++)
	  {
		x2[i] = country2.get(i);
		y2[i] = area2.get(i);  
		y3[i] = area3.get(i);
		System.out.println("x2 "+ x2[i]);
		System.out.println("y2 "+ y2[i]);
	  }

//String[] x ={"Country","Africa","Asia"};
//int[] y= {0,574839,118545}; 
//int[] y1= {0,94432,574839}; 
successJSONObj = new JSONObject();
//toptenJSONObj  = new JSONObject();
//successJSONObj.put("region",x);
	
	System.out.println("json pass parameter");
		successJSONObj.put("region",x);
		successJSONObj.put("region2",x2);
		successJSONObj.put("value",y);
		successJSONObj.put("value2",y2);
		successJSONObj.put("value3",y3);
		successJSONObj.put("CRMNameByDate", "test");
		successJSONObj.write(response.getWriter());
	
%>



