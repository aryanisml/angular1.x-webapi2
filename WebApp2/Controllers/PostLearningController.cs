using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApp2.Models;

namespace WebApp2.Controllers
{

    [RoutePrefix("test/postlearn")]
    public class PostLearningController : ApiController
    {

        [ResponseType(typeof(ShippingResponse))]
        [Route("")]
        [HttpPost]
        public IHttpActionResult InsertRegionTerritory(ShippingRequest obj)
        {
               ShippingResponse response = new ShippingResponse();
            if (obj==null)
            {
                return BadRequest();
            }

            using (NORTHWNDEntitiesNew  dbContext = new NORTHWNDEntitiesNew())
            {
                dbContext.Shippers.Add(new Shipper {CompanyName=obj.CompanyName, Phone=obj.Phone });
                dbContext.SaveChanges();
             
                response.success = "Yes"; response.failure = "No";

            }
            return Ok(response);
        
        
        }



    }
}
