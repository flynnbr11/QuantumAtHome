using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebsiteItemApp
{
    class Item
    {
        private string name = "";
        private Dictionary<string, Technology> techs = new Dictionary<string, Technology>();

        public Item()
        {

        }

        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }
        public Dictionary<string, Technology> Techs
        {
            get
            {
                return techs;
            }
        }

        public Technology GetTechByName(string name)
        {
            if(!techs.ContainsKey(name))
            {
                throw new ArgumentException("does not contain technology \'" + name + "\'");
            }

            return techs[name];
        }

        public void AddOrUpdateTech(Technology newTech)
        {
            techs[newTech.Name] = newTech;
        }
    }
}
