using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebsiteItemApp
{
    class Technology
    {
        private string name = "";
        private string imageName = "";
        private string summary = "";
        private string description = "";
        private string moreInfoUrl = "";

        public Technology()
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
        public string ImageName
        {
            get
            {
                return imageName;
            }
            set
            {
                imageName = value;
            }
        }
        public string Summary
        {
            get
            {
                return summary;
            }
            set
            {
                summary = value;
            }
        }
        public string Description
        {
            get
            {
                return description;
            }
            set
            {
                description = value;
            }
        }
        public string MoreInfoURL
        {
            get
            {
                return moreInfoUrl;
            }
            set
            {
                moreInfoUrl = value;
            }
        }
    }
}
