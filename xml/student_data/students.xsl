<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
 <xsl:template match="/">
  <html>
   <head>
    <title>Student List</title>
   </head>
   <body>
    <h2>Student List</h2>
    <table border="1">
     <tr bgcolor="#fada5e">
      <td>ID</td>
      <td>Name</td>
      <td>Branch</td>
      <td>Year</td>
     </tr>
     <xsl:for-each select="students/student">
      <tr>
       <td><xsl:value-of select="id"></xsl:value-of></td>
       <td><xsl:value-of select="name/firstname"></xsl:value-of> <xsl:value-of select="name/lastname"></xsl:value-of></td>
       <td><xsl:value-of select="branch"></xsl:value-of></td>
       <td><xsl:value-of select="year"></xsl:value-of></td>
      </tr>
     </xsl:for-each>
    </table>
   </body>
  </html>
 </xsl:template>
</xsl:stylesheet>