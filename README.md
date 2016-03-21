# angular1.x-webapi2

Use Northwind database for WebApi Project
https://northwinddatabase.codeplex.com/

Angular JS code created as per John Papa style guide 1.x
https://github.com/johnpapa/angular-styleguide

1.  Angular Project 
         App Folder
         - myApp.js
         - myFactory.js 
   
     Html Page - ShippingAngularApp.html

Browse this page in any browser and perform the operation.

2. For WebApp2 project based on webapi 2, created simple post service which can save the data in database.
After downloading the project make the changes in web.config file change the connection string and entity framework database string
as per your local or shared network database.
  <add name="NORTHWNDEntities" connectionString="metadata=res://*/Models.NorthwindApp.csdl|res://*/Models.NorthwindApp.ssdl|res://*/Models.NorthwindApp.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=TANUSHREE\SA;initial catalog=NORTHWND;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" providerName="System.Data.EntityClient" />
  <add name="NORTHWNDEntitiesNew" connectionString="metadata=res://*/Models.NorthwindApps.csdl|res://*/Models.NorthwindApps.ssdl|res://*/Models.NorthwindApps.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=TANUSHREE\SA;initial catalog=NORTHWND;integrated security=True;multipleactiveresultsets=True;application name=EntityFramework&quot;" providerName="System.Data.EntityClient" />

Controller
  PostLearningController.cs
  
  In web api project , AddShipping.html page also available which show the ajax post call using $.ajax jquery.
  
  

For any queries for application mail me swapnil.kamble02@gmail.com
             
