using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebsiteItemApp
{
    class Room
    {
        private string name = "";
        private Dictionary<string, Item> items = new Dictionary<string, Item>();

        public Room()
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

        public Dictionary<string, Item> Items
        {
            get
            {
                return items;
            }
        }

        public void AddOrUpdateItem(Item newItem)
        {
            items[newItem.Name] = newItem;
        }

        public Item GetItemByName(string name)
        {
            if (!items.ContainsKey(name))
            {
                throw new ArgumentException("does not contain item \'" + name + "\'");
            }

            return items[name];
        }
    }
}
