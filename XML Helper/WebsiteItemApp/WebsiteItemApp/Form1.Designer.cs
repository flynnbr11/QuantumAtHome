namespace WebsiteItemApp
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.roomDeleteButton = new System.Windows.Forms.Button();
            this.roomSelectComboBox = new System.Windows.Forms.ComboBox();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.deleteItemButton = new System.Windows.Forms.Button();
            this.itemSelectComboBox = new System.Windows.Forms.ComboBox();
            this.groupBox3 = new System.Windows.Forms.GroupBox();
            this.techSelectComboBox = new System.Windows.Forms.ComboBox();
            this.techMoreInfoTextBox = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.saveTechButton = new System.Windows.Forms.Button();
            this.label5 = new System.Windows.Forms.Label();
            this.techDescriptionTextBox = new System.Windows.Forms.RichTextBox();
            this.deleteTechButton = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            this.techSummaryTextBox = new System.Windows.Forms.RichTextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.techImageFilenameTextBox = new System.Windows.Forms.TextBox();
            this.createRoomTextBox = new System.Windows.Forms.TextBox();
            this.groupBox4 = new System.Windows.Forms.GroupBox();
            this.createRoomButton = new System.Windows.Forms.Button();
            this.roomNameLabel = new System.Windows.Forms.Label();
            this.groupBox6 = new System.Windows.Forms.GroupBox();
            this.createItemButton = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.createItemTextBox = new System.Windows.Forms.TextBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panel1 = new System.Windows.Forms.Panel();
            this.saveDefaultsButton = new System.Windows.Forms.Button();
            this.saveXMLButton = new System.Windows.Forms.Button();
            this.loadXMLButton = new System.Windows.Forms.Button();
            this.xmlDestFilenameTextBox = new System.Windows.Forms.TextBox();
            this.xmlSrcFilenameTextBox = new System.Windows.Forms.TextBox();
            this.label8 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.statusStrip1 = new System.Windows.Forms.StatusStrip();
            this.statusMessage = new System.Windows.Forms.ToolStripStatusLabel();
            this.clearTechButton = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.groupBox3.SuspendLayout();
            this.groupBox4.SuspendLayout();
            this.groupBox6.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.panel1.SuspendLayout();
            this.statusStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.roomDeleteButton);
            this.groupBox1.Controls.Add(this.roomSelectComboBox);
            this.groupBox1.Location = new System.Drawing.Point(12, 82);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(207, 100);
            this.groupBox1.TabIndex = 0;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Room Select";
            // 
            // roomDeleteButton
            // 
            this.roomDeleteButton.Location = new System.Drawing.Point(36, 57);
            this.roomDeleteButton.Name = "roomDeleteButton";
            this.roomDeleteButton.Size = new System.Drawing.Size(144, 23);
            this.roomDeleteButton.TabIndex = 2;
            this.roomDeleteButton.Text = "Delete Room";
            this.roomDeleteButton.UseVisualStyleBackColor = true;
            this.roomDeleteButton.Click += new System.EventHandler(this.roomDeleteButton_Click);
            // 
            // roomSelectComboBox
            // 
            this.roomSelectComboBox.FormattingEnabled = true;
            this.roomSelectComboBox.Location = new System.Drawing.Point(36, 30);
            this.roomSelectComboBox.Name = "roomSelectComboBox";
            this.roomSelectComboBox.Size = new System.Drawing.Size(144, 21);
            this.roomSelectComboBox.TabIndex = 0;
            this.roomSelectComboBox.SelectedIndexChanged += new System.EventHandler(this.roomSelectComboBox_SelectedIndexChanged);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.deleteItemButton);
            this.groupBox2.Controls.Add(this.itemSelectComboBox);
            this.groupBox2.Location = new System.Drawing.Point(12, 188);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(207, 100);
            this.groupBox2.TabIndex = 1;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Item Select";
            // 
            // deleteItemButton
            // 
            this.deleteItemButton.Location = new System.Drawing.Point(36, 56);
            this.deleteItemButton.Name = "deleteItemButton";
            this.deleteItemButton.Size = new System.Drawing.Size(144, 23);
            this.deleteItemButton.TabIndex = 6;
            this.deleteItemButton.Text = "Delete Item";
            this.deleteItemButton.UseVisualStyleBackColor = true;
            this.deleteItemButton.Click += new System.EventHandler(this.deleteItemButton_Click);
            // 
            // itemSelectComboBox
            // 
            this.itemSelectComboBox.FormattingEnabled = true;
            this.itemSelectComboBox.Location = new System.Drawing.Point(36, 29);
            this.itemSelectComboBox.Name = "itemSelectComboBox";
            this.itemSelectComboBox.Size = new System.Drawing.Size(144, 21);
            this.itemSelectComboBox.TabIndex = 5;
            this.itemSelectComboBox.SelectedIndexChanged += new System.EventHandler(this.itemSelectComboBox_SelectedIndexChanged);
            // 
            // groupBox3
            // 
            this.groupBox3.Controls.Add(this.clearTechButton);
            this.groupBox3.Controls.Add(this.techSelectComboBox);
            this.groupBox3.Controls.Add(this.techMoreInfoTextBox);
            this.groupBox3.Controls.Add(this.label6);
            this.groupBox3.Controls.Add(this.saveTechButton);
            this.groupBox3.Controls.Add(this.label5);
            this.groupBox3.Controls.Add(this.techDescriptionTextBox);
            this.groupBox3.Controls.Add(this.deleteTechButton);
            this.groupBox3.Controls.Add(this.label4);
            this.groupBox3.Controls.Add(this.techSummaryTextBox);
            this.groupBox3.Controls.Add(this.label3);
            this.groupBox3.Controls.Add(this.label2);
            this.groupBox3.Controls.Add(this.techImageFilenameTextBox);
            this.groupBox3.Location = new System.Drawing.Point(12, 294);
            this.groupBox3.Name = "groupBox3";
            this.groupBox3.Size = new System.Drawing.Size(760, 307);
            this.groupBox3.TabIndex = 2;
            this.groupBox3.TabStop = false;
            this.groupBox3.Text = "Technology";
            // 
            // techSelectComboBox
            // 
            this.techSelectComboBox.FormattingEnabled = true;
            this.techSelectComboBox.Location = new System.Drawing.Point(9, 30);
            this.techSelectComboBox.Name = "techSelectComboBox";
            this.techSelectComboBox.Size = new System.Drawing.Size(229, 21);
            this.techSelectComboBox.TabIndex = 14;
            this.techSelectComboBox.SelectedIndexChanged += new System.EventHandler(this.techSelectComboBox_SelectedIndexChanged);
            // 
            // techMoreInfoTextBox
            // 
            this.techMoreInfoTextBox.Location = new System.Drawing.Point(9, 282);
            this.techMoreInfoTextBox.Name = "techMoreInfoTextBox";
            this.techMoreInfoTextBox.Size = new System.Drawing.Size(741, 20);
            this.techMoreInfoTextBox.TabIndex = 13;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(13, 266);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(77, 13);
            this.label6.TabIndex = 12;
            this.label6.Text = "More Info URL";
            // 
            // saveTechButton
            // 
            this.saveTechButton.Location = new System.Drawing.Point(9, 57);
            this.saveTechButton.Name = "saveTechButton";
            this.saveTechButton.Size = new System.Drawing.Size(75, 21);
            this.saveTechButton.TabIndex = 11;
            this.saveTechButton.Text = "Save";
            this.saveTechButton.UseVisualStyleBackColor = true;
            this.saveTechButton.Click += new System.EventHandler(this.saveTechButton_Click);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(6, 140);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(88, 13);
            this.label5.TabIndex = 10;
            this.label5.Text = "Tech Description";
            // 
            // techDescriptionTextBox
            // 
            this.techDescriptionTextBox.Location = new System.Drawing.Point(9, 156);
            this.techDescriptionTextBox.Name = "techDescriptionTextBox";
            this.techDescriptionTextBox.Size = new System.Drawing.Size(741, 107);
            this.techDescriptionTextBox.TabIndex = 9;
            this.techDescriptionTextBox.Text = "";
            // 
            // deleteTechButton
            // 
            this.deleteTechButton.Location = new System.Drawing.Point(167, 57);
            this.deleteTechButton.Name = "deleteTechButton";
            this.deleteTechButton.Size = new System.Drawing.Size(71, 21);
            this.deleteTechButton.TabIndex = 8;
            this.deleteTechButton.Text = "Delete";
            this.deleteTechButton.UseVisualStyleBackColor = true;
            this.deleteTechButton.Click += new System.EventHandler(this.deleteTechButton_Click);
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(6, 78);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(78, 13);
            this.label4.TabIndex = 6;
            this.label4.Text = "Tech Summary";
            // 
            // techSummaryTextBox
            // 
            this.techSummaryTextBox.Location = new System.Drawing.Point(9, 94);
            this.techSummaryTextBox.Name = "techSummaryTextBox";
            this.techSummaryTextBox.Size = new System.Drawing.Size(741, 43);
            this.techSummaryTextBox.TabIndex = 5;
            this.techSummaryTextBox.Text = "";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(7, 14);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(63, 13);
            this.label3.TabIndex = 4;
            this.label3.Text = "Tech Name";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(469, 52);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(81, 13);
            this.label2.TabIndex = 2;
            this.label2.Text = "Image Filename";
            // 
            // techImageFilenameTextBox
            // 
            this.techImageFilenameTextBox.Location = new System.Drawing.Point(472, 68);
            this.techImageFilenameTextBox.Name = "techImageFilenameTextBox";
            this.techImageFilenameTextBox.Size = new System.Drawing.Size(278, 20);
            this.techImageFilenameTextBox.TabIndex = 1;
            // 
            // createRoomTextBox
            // 
            this.createRoomTextBox.Location = new System.Drawing.Point(103, 27);
            this.createRoomTextBox.Name = "createRoomTextBox";
            this.createRoomTextBox.Size = new System.Drawing.Size(211, 20);
            this.createRoomTextBox.TabIndex = 3;
            // 
            // groupBox4
            // 
            this.groupBox4.Controls.Add(this.createRoomButton);
            this.groupBox4.Controls.Add(this.roomNameLabel);
            this.groupBox4.Controls.Add(this.createRoomTextBox);
            this.groupBox4.Location = new System.Drawing.Point(225, 82);
            this.groupBox4.Name = "groupBox4";
            this.groupBox4.Size = new System.Drawing.Size(337, 100);
            this.groupBox4.TabIndex = 3;
            this.groupBox4.TabStop = false;
            this.groupBox4.Text = "Create Room";
            // 
            // createRoomButton
            // 
            this.createRoomButton.Location = new System.Drawing.Point(103, 57);
            this.createRoomButton.Name = "createRoomButton";
            this.createRoomButton.Size = new System.Drawing.Size(211, 23);
            this.createRoomButton.TabIndex = 3;
            this.createRoomButton.Text = "Create Room";
            this.createRoomButton.UseVisualStyleBackColor = true;
            this.createRoomButton.Click += new System.EventHandler(this.createRoomButton_Click);
            // 
            // roomNameLabel
            // 
            this.roomNameLabel.AutoSize = true;
            this.roomNameLabel.Location = new System.Drawing.Point(6, 30);
            this.roomNameLabel.Name = "roomNameLabel";
            this.roomNameLabel.Size = new System.Drawing.Size(91, 13);
            this.roomNameLabel.TabIndex = 4;
            this.roomNameLabel.Text = "New Room Name";
            // 
            // groupBox6
            // 
            this.groupBox6.Controls.Add(this.createItemButton);
            this.groupBox6.Controls.Add(this.label1);
            this.groupBox6.Controls.Add(this.createItemTextBox);
            this.groupBox6.Location = new System.Drawing.Point(225, 188);
            this.groupBox6.Name = "groupBox6";
            this.groupBox6.Size = new System.Drawing.Size(337, 100);
            this.groupBox6.TabIndex = 5;
            this.groupBox6.TabStop = false;
            this.groupBox6.Text = "Create Item";
            // 
            // createItemButton
            // 
            this.createItemButton.Location = new System.Drawing.Point(103, 56);
            this.createItemButton.Name = "createItemButton";
            this.createItemButton.Size = new System.Drawing.Size(211, 23);
            this.createItemButton.TabIndex = 7;
            this.createItemButton.Text = "Create Item";
            this.createItemButton.UseVisualStyleBackColor = true;
            this.createItemButton.Click += new System.EventHandler(this.createItemButton_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(6, 33);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(83, 13);
            this.label1.TabIndex = 6;
            this.label1.Text = "New Item Name";
            // 
            // createItemTextBox
            // 
            this.createItemTextBox.Location = new System.Drawing.Point(103, 30);
            this.createItemTextBox.Name = "createItemTextBox";
            this.createItemTextBox.Size = new System.Drawing.Size(211, 20);
            this.createItemTextBox.TabIndex = 5;
            // 
            // pictureBox1
            // 
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(568, 46);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(204, 200);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 6;
            this.pictureBox1.TabStop = false;
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.saveDefaultsButton);
            this.panel1.Controls.Add(this.saveXMLButton);
            this.panel1.Controls.Add(this.loadXMLButton);
            this.panel1.Controls.Add(this.xmlDestFilenameTextBox);
            this.panel1.Controls.Add(this.xmlSrcFilenameTextBox);
            this.panel1.Controls.Add(this.label8);
            this.panel1.Controls.Add(this.label7);
            this.panel1.Location = new System.Drawing.Point(12, 12);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(550, 64);
            this.panel1.TabIndex = 7;
            // 
            // saveDefaultsButton
            // 
            this.saveDefaultsButton.Location = new System.Drawing.Point(459, 4);
            this.saveDefaultsButton.Name = "saveDefaultsButton";
            this.saveDefaultsButton.Size = new System.Drawing.Size(88, 57);
            this.saveDefaultsButton.TabIndex = 6;
            this.saveDefaultsButton.Text = "Save\r\nDefaults";
            this.saveDefaultsButton.UseVisualStyleBackColor = true;
            this.saveDefaultsButton.Click += new System.EventHandler(this.saveDefaultsButton_Click);
            // 
            // saveXMLButton
            // 
            this.saveXMLButton.Location = new System.Drawing.Point(339, 31);
            this.saveXMLButton.Name = "saveXMLButton";
            this.saveXMLButton.Size = new System.Drawing.Size(90, 20);
            this.saveXMLButton.TabIndex = 5;
            this.saveXMLButton.Text = "Save XML";
            this.saveXMLButton.UseVisualStyleBackColor = true;
            this.saveXMLButton.Click += new System.EventHandler(this.saveXMLButton_Click);
            // 
            // loadXMLButton
            // 
            this.loadXMLButton.Location = new System.Drawing.Point(339, 7);
            this.loadXMLButton.Name = "loadXMLButton";
            this.loadXMLButton.Size = new System.Drawing.Size(90, 20);
            this.loadXMLButton.TabIndex = 4;
            this.loadXMLButton.Text = "Load XML";
            this.loadXMLButton.UseVisualStyleBackColor = true;
            this.loadXMLButton.Click += new System.EventHandler(this.loadXMLButton_Click);
            // 
            // xmlDestFilenameTextBox
            // 
            this.xmlDestFilenameTextBox.Location = new System.Drawing.Point(71, 31);
            this.xmlDestFilenameTextBox.Name = "xmlDestFilenameTextBox";
            this.xmlDestFilenameTextBox.Size = new System.Drawing.Size(262, 20);
            this.xmlDestFilenameTextBox.TabIndex = 3;
            this.xmlDestFilenameTextBox.Text = "qah_tech_new.xml";
            // 
            // xmlSrcFilenameTextBox
            // 
            this.xmlSrcFilenameTextBox.Location = new System.Drawing.Point(71, 7);
            this.xmlSrcFilenameTextBox.Name = "xmlSrcFilenameTextBox";
            this.xmlSrcFilenameTextBox.Size = new System.Drawing.Size(262, 20);
            this.xmlSrcFilenameTextBox.TabIndex = 2;
            this.xmlSrcFilenameTextBox.Text = "qah_tech.xml";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(6, 34);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(54, 13);
            this.label8.TabIndex = 1;
            this.label8.Text = "XML Dest";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(6, 10);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(48, 13);
            this.label7.TabIndex = 0;
            this.label7.Text = "XML Src";
            // 
            // statusStrip1
            // 
            this.statusStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.statusMessage});
            this.statusStrip1.Location = new System.Drawing.Point(0, 609);
            this.statusStrip1.Name = "statusStrip1";
            this.statusStrip1.Size = new System.Drawing.Size(784, 22);
            this.statusStrip1.SizingGrip = false;
            this.statusStrip1.TabIndex = 8;
            this.statusStrip1.Text = "statusStrip1";
            // 
            // statusMessage
            // 
            this.statusMessage.Name = "statusMessage";
            this.statusMessage.Size = new System.Drawing.Size(16, 17);
            this.statusMessage.Text = "...";
            // 
            // clearTechButton
            // 
            this.clearTechButton.Location = new System.Drawing.Point(90, 57);
            this.clearTechButton.Name = "clearTechButton";
            this.clearTechButton.Size = new System.Drawing.Size(71, 21);
            this.clearTechButton.TabIndex = 15;
            this.clearTechButton.Text = "Clear";
            this.clearTechButton.UseVisualStyleBackColor = true;
            this.clearTechButton.Click += new System.EventHandler(this.clearTechButton_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(784, 631);
            this.Controls.Add(this.statusStrip1);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.pictureBox1);
            this.Controls.Add(this.groupBox6);
            this.Controls.Add(this.groupBox4);
            this.Controls.Add(this.groupBox3);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox2.ResumeLayout(false);
            this.groupBox3.ResumeLayout(false);
            this.groupBox3.PerformLayout();
            this.groupBox4.ResumeLayout(false);
            this.groupBox4.PerformLayout();
            this.groupBox6.ResumeLayout(false);
            this.groupBox6.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.statusStrip1.ResumeLayout(false);
            this.statusStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.GroupBox groupBox3;
        private System.Windows.Forms.Button roomDeleteButton;
        private System.Windows.Forms.ComboBox roomSelectComboBox;
        private System.Windows.Forms.TextBox createRoomTextBox;
        private System.Windows.Forms.GroupBox groupBox4;
        private System.Windows.Forms.Button deleteItemButton;
        private System.Windows.Forms.ComboBox itemSelectComboBox;
        private System.Windows.Forms.Button createRoomButton;
        private System.Windows.Forms.Label roomNameLabel;
        private System.Windows.Forms.GroupBox groupBox6;
        private System.Windows.Forms.Button createItemButton;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox createItemTextBox;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.TextBox techImageFilenameTextBox;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button deleteTechButton;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.RichTextBox techSummaryTextBox;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.RichTextBox techDescriptionTextBox;
        private System.Windows.Forms.Button saveTechButton;
        private System.Windows.Forms.TextBox techMoreInfoTextBox;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.TextBox xmlDestFilenameTextBox;
        private System.Windows.Forms.TextBox xmlSrcFilenameTextBox;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Button saveXMLButton;
        private System.Windows.Forms.Button loadXMLButton;
        private System.Windows.Forms.Button saveDefaultsButton;
        private System.Windows.Forms.StatusStrip statusStrip1;
        private System.Windows.Forms.ToolStripStatusLabel statusMessage;
        private System.Windows.Forms.ComboBox techSelectComboBox;
        private System.Windows.Forms.Button clearTechButton;
    }
}

