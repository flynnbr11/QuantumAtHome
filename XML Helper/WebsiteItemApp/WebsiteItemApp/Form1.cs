using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Xml;

namespace WebsiteItemApp
{
    public partial class Form1 : Form
    {
        private const string configFilename = "config.cfg";
        private Dictionary<string, Room> rooms = new Dictionary<string, Room>();

        private Room activeRoom         = null;
        private Item activeItem         = null;
        private Technology activeTech   = null;

        private bool TechSaved = false;

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            if (File.Exists(configFilename))
            {
                StreamReader configFile = new StreamReader(configFilename);

                xmlSrcFilenameTextBox.Text = configFile.ReadLine();
                xmlDestFilenameTextBox.Text = configFile.ReadLine();

                configFile.Close();
            }
            else
            {
                statusMessage.Text = "config file not found";
            }

            this.FormBorderStyle = FormBorderStyle.FixedSingle;
            this.MaximizeBox = false;
            this.MinimizeBox = false;
        }

        private void saveDefaultsButton_Click(object sender, EventArgs e)
        {
            StreamWriter configFile = new StreamWriter(configFilename, false);

            configFile.WriteLine(xmlSrcFilenameTextBox.Text);
            configFile.WriteLine(xmlDestFilenameTextBox.Text);

            configFile.Close();
        }

        private void loadXMLButton_Click(object sender, EventArgs e)
        {
            XmlDocument xmlDoc = new XmlDocument();

            try
            {
                xmlDoc.Load(xmlSrcFilenameTextBox.Text);
            }
            catch (FileNotFoundException fne)
            {
                string message = "could not find XML file \'" + fne.FileName + "\'";
                string caption = "File Not Found";

                statusMessage.Text = message;

                MessageBoxButtons buttons = MessageBoxButtons.OK;

                MessageBox.Show(message, caption, buttons);
            }

            ClearRooms();

            // TODO: code to load rooms, items, techs
            XmlNodeList xmlRoomList = xmlDoc.GetElementsByTagName("room");

            foreach(XmlNode xmlRoom in xmlRoomList)
            {
                Room room = new Room();
                room.Name = xmlRoom.Attributes.GetNamedItem("name").Value;

                XmlNodeList xmlItemList = xmlRoom.ChildNodes;

                foreach(XmlNode xmlItem in xmlItemList)
                {
                    Item item = new Item();
                    item.Name = xmlItem.Attributes.GetNamedItem("name").Value;

                    XmlNodeList xmlTechList = xmlItem.ChildNodes;

                    foreach(XmlNode xmlTech in xmlTechList)
                    {
                        Technology tech = new Technology();

                        if (!xmlTech.HasChildNodes)
                            continue;

                        for(int i = 0; i < xmlTech.ChildNodes.Count; ++i)
                        {
                            switch(xmlTech.ChildNodes[i].Name)
                            {
                                case "name":
                                    if (xmlTech.ChildNodes[i].FirstChild != null)
                                        tech.Name = xmlTech.ChildNodes[i].FirstChild.Value;
                                    break;
                                case "image_name":
                                    if (xmlTech.ChildNodes[i].FirstChild != null)
                                        tech.ImageName = xmlTech.ChildNodes[i].FirstChild.Value;
                                    break;
                                case "summary":
                                    if (xmlTech.ChildNodes[i].FirstChild != null)
                                        tech.Summary = xmlTech.ChildNodes[i].FirstChild.Value;
                                    break;
                                case "description":
                                    if (xmlTech.ChildNodes[i].FirstChild != null)
                                        tech.Description = xmlTech.ChildNodes[i].FirstChild.Value;
                                    break;
                                case "more_info_url":
                                    if (xmlTech.ChildNodes[i].FirstChild != null)
                                        tech.MoreInfoURL = xmlTech.ChildNodes[i].FirstChild.Value;
                                    break;
                                default:
                                    break;
                            }
                        }

                        item.AddOrUpdateTech(tech);
                    }

                    room.AddOrUpdateItem(item);
                }

                AddRoom(room);
            }
        }

        private void saveXMLButton_Click(object sender, EventArgs e)
        {
            XmlDocument xmlDoc = new XmlDocument();
            XmlNode xmlRoot = xmlDoc.CreateNode(XmlNodeType.Element, "root", "");

            // construct the document
            

            foreach (Room room in rooms.Values)
            {
                XmlNode xmlRoom;
                XmlAttribute xmlRoomName;

                xmlRoom = xmlDoc.CreateNode(XmlNodeType.Element, "room", "");
                xmlRoomName = xmlDoc.CreateAttribute("name");

                xmlRoom.Attributes.Append(xmlRoomName);

                xmlRoom.Attributes.GetNamedItem("name").Value = room.Name;

                foreach(Item item in room.Items.Values)
                {
                    XmlNode xmlItem = xmlDoc.CreateNode(XmlNodeType.Element, "item", "");
                    XmlAttribute xmlItemName = xmlDoc.CreateAttribute("name");

                    xmlItem.Attributes.Append(xmlItemName);

                    xmlItem.Attributes.GetNamedItem("name").Value = item.Name;

                    foreach(Technology tech in item.Techs.Values)
                    {
                        XmlNode xmlTech = xmlDoc.CreateNode(XmlNodeType.Element, "tech", "");

                        XmlNode xmlTechName         = xmlDoc.CreateNode(XmlNodeType.Element, "name", "");
                        XmlNode xmlTechImageName    = xmlDoc.CreateNode(XmlNodeType.Element, "image_name", "");
                        XmlNode xmlTechSummary      = xmlDoc.CreateNode(XmlNodeType.Element, "summary", "");
                        XmlNode xmlTechDescription  = xmlDoc.CreateNode(XmlNodeType.Element, "description", "");
                        XmlNode xmlTechMoreInfoURL  = xmlDoc.CreateNode(XmlNodeType.Element, "more_info_url", "");

                        xmlTechName.InnerText = tech.Name;
                        xmlTechImageName.InnerText = tech.ImageName;
                        xmlTechSummary.InnerText = tech.Summary;
                        xmlTechDescription.InnerText = tech.Description;
                        xmlTechMoreInfoURL.InnerText = tech.MoreInfoURL;

                        xmlTech.AppendChild(xmlTechName);
                        xmlTech.AppendChild(xmlTechImageName);
                        xmlTech.AppendChild(xmlTechSummary);
                        xmlTech.AppendChild(xmlTechDescription);
                        xmlTech.AppendChild(xmlTechMoreInfoURL);

                        xmlItem.AppendChild(xmlTech);
                    }

                    xmlRoom.AppendChild(xmlItem);
                }

                xmlRoot.AppendChild(xmlRoom);
            }

            xmlDoc.AppendChild(xmlRoot);

            xmlDoc.Save(xmlDestFilenameTextBox.Text);
        }

        private void SetActiveRoom(string name)
        {
            if (!rooms.ContainsKey(name))
            {
                activeRoom = null;

                return;
            }

            activeRoom = rooms[name];

            roomSelectComboBox.Text = activeRoom.Name;

            ClearItems();

            foreach (Item item in activeRoom.Items.Values)
            {
                itemSelectComboBox.Items.Add(item.Name);
            }
        }

        private void SetActiveItem(string name)
        {
            activeItem = null;

            if ((activeRoom == null) || (!activeRoom.Items.ContainsKey(name)))
            {
                return;
            }

            activeItem = activeRoom.Items[name];

            ClearTech();

            foreach(Technology tech in activeItem.Techs.Values)
            {
                techSelectComboBox.Items.Add(tech.Name);
            }
        }

        private void ClearRooms()
        {
            rooms.Clear();

            activeRoom = null;

            roomSelectComboBox.Items.Clear();
            roomSelectComboBox.Text = "";

            ClearItems();
        }

        private void ClearItems()
        {
            ClearTech();

            activeItem = null;

            itemSelectComboBox.Items.Clear();
            itemSelectComboBox.Text = "";
        }


        private void SoftClearTech()
        {
            activeTech = null;

            techSelectComboBox.Text = "";
            techImageFilenameTextBox.Text = "";
            techSummaryTextBox.Text = "";
            techDescriptionTextBox.Text = "";
            techMoreInfoTextBox.Text = "";
        }
        private void ClearTech()
        {
            SoftClearTech();
            techSelectComboBox.Items.Clear();
        }

        private void roomSelectComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            SetActiveRoom(roomSelectComboBox.Text);
        }

        private void roomDeleteButton_Click(object sender, EventArgs e)
        {
            rooms.Remove(roomSelectComboBox.Text);

            roomSelectComboBox.Items.Remove(roomSelectComboBox.Text);

            roomSelectComboBox.Text = "";

            activeRoom = null;

            ClearItems();
        }

        private void AddRoom(Room room)
        {
            rooms.Add(room.Name, room);

            roomSelectComboBox.Items.Add(room.Name);

            SetActiveRoom(room.Name);
        }

        private void createRoomButton_Click(object sender, EventArgs e)
        {
            if (rooms.ContainsKey(createRoomTextBox.Text))
                return;

            if (createRoomTextBox.Text == "")
                return;

            Room newRoom = new Room();

            newRoom.Name = createRoomTextBox.Text;

            AddRoom(newRoom);

            SetActiveRoom(roomSelectComboBox.Text);

            createRoomTextBox.Text = "";
        }

        private void deleteItemButton_Click(object sender, EventArgs e)
        {
            rooms.Remove(itemSelectComboBox.Text);

            itemSelectComboBox.Items.Remove(itemSelectComboBox.Text);

            itemSelectComboBox.Text = "";

            activeItem = null;

            ClearTech();
        }

        private void SetActiveTech(string name)
        {
            activeTech = null;

            if ((activeItem == null) || (!activeItem.Techs.ContainsKey(name)))
            {
                return;
            }
            
            activeTech = activeItem.Techs[name];

            techSelectComboBox.Text         = activeTech.Name;
            techImageFilenameTextBox.Text   = activeTech.ImageName;
            techSummaryTextBox.Text         = activeTech.Summary;
            techDescriptionTextBox.Text     = activeTech.Description;
            techMoreInfoTextBox.Text        = activeTech.MoreInfoURL;
        }

        private void techSelectComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            SetActiveTech(techSelectComboBox.Text);
        }

        private void AddItem(Item item)
        {
            if (activeRoom == null)
                return;

            activeRoom.Items.Add(item.Name, item);

            SetActiveItem(item.Name);

            itemSelectComboBox.Items.Add(item.Name);
            
            itemSelectComboBox.Text = activeItem.Name;
        }

        private void AddTech(Technology tech)
        {
            if (activeItem == null)
                return;

            if (!techSelectComboBox.Items.Contains(tech.Name))
            {
                techSelectComboBox.Items.Add(tech.Name);
            }

            activeItem.AddOrUpdateTech(tech);
        }

        private void itemSelectComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            SetActiveItem(itemSelectComboBox.Text);
        }

        private void deleteTechButton_Click(object sender, EventArgs e)
        {
            if (activeItem == null)
                return;

            activeItem.Techs.Remove(techSelectComboBox.Text);

            techSelectComboBox.Items.Remove(techSelectComboBox.Text);

            techSelectComboBox.Text = "";

            activeTech = null;

            SoftClearTech();
        }

        private void saveTechButton_Click(object sender, EventArgs e)
        {
            Technology tech = new Technology();

            tech.Name = techSelectComboBox.Text;
            tech.ImageName = techImageFilenameTextBox.Text;
            tech.Summary = techSummaryTextBox.Text;
            tech.Description = techDescriptionTextBox.Text;
            tech.MoreInfoURL = techMoreInfoTextBox.Text;

            AddTech(tech);

            SetActiveTech(tech.Name);
        }

        private void createItemButton_Click(object sender, EventArgs e)
        {
            if (activeRoom == null)
                return;

            if (createItemTextBox.Text == "")
                return;

            if (activeRoom.Items.ContainsKey(createItemTextBox.Text))
                return;

            Item newItem = new Item();

            newItem.Name = createItemTextBox.Text;

            AddItem(newItem);

            SetActiveRoom(createItemTextBox.Text);

            createItemTextBox.Text = "";
        }

        private void clearTechButton_Click(object sender, EventArgs e)
        {
            SoftClearTech();
        }
    }
}
