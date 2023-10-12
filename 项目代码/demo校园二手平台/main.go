package main

import (
	"fmt"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"net/http"
)
//
//
//func img_shop(c *gin.Context){
//	file,err :=c.FormFile("img_shop")
//	if err != nil{
//		fmt.Println(err)
//		c.String(http.StatusBadRequest,"请求失败")
//		return
//	}
//	fileName := file.Filename
//	fmt.Println("文件名",fileName)
//	if err := c.SaveUploadedFile(file,"./assets/images/shop/"+fileName); err != nil{
//		c.String(http.StatusBadRequest,"保存失败 Error：%s" ,err.Error())
//		return
//	}
//}


func main() {
	r := gin.Default()
	store := cookie.NewStore([]byte("secret"))
	r.Use(sessions.Sessions("mysession", store))
	r.Static("/assets", "./assets")
	r.LoadHTMLGlob("templates/**/*")
	r.POST("/storeAccount", func(c *gin.Context) {
		account := c.PostForm("account")
		names := c.PostForm("name")
		session := sessions.Default(c)
		session.Set("account", []string{account,names})
		//session.Set("name", names)
		err := session.Save()
		if err != nil{
			fmt.Println(err)
		}
		c.JSON(200, nil)
	})
	r.GET("/", func(c *gin.Context) {

		c.HTML(200, "main/a.html", nil)
	})
	r.GET("/author", func(c *gin.Context) {
		session := sessions.Default(c)
		//names := session.Get("name")
		account := session.Get("account")
		fmt.Println(account.([]string)[0],account.([]string)[1])
		c.HTML(200, "main/author.html", gin.H{
			"account": account.([]string)[0],
			"name":account.([]string)[1],
		})
	})
	r.GET("/signin", func(c *gin.Context) {
		c.HTML(200, "main/signin.html", nil)
	})
	r.GET("/signup", func(c *gin.Context) {
		c.HTML(200, "main/signup.html", nil)
	})
	r.GET("/nft",func(c *gin.Context) {
		c.HTML(200, "main/nft.html", nil)
	})
	r.GET("/wallet",func(c *gin.Context) {
		c.HTML(200, "main/wallet.html", nil)
	})
	r.GET("/blog-2",func(c *gin.Context) {
		c.HTML(200, "main/blog-2.html", nil)
	})
	r.GET("/blog-single-2",func(c *gin.Context) {
		c.HTML(200, "main/blog-single-2.html", nil)
	})
	r.GET("/help-single",func(c *gin.Context) {
		c.HTML(200, "main/help-single.html", nil)
	})

	r.GET("/buy",func(c *gin.Context) {
		c.HTML(200, "main/buy.html", nil)
	})
	r.GET("/single",func(c *gin.Context) {
		session := sessions.Default(c)
		//names := session.Get("name")
		account := session.Get("account")
		fmt.Println(account.([]string)[0],account.([]string)[1])
		c.HTML(200, "main/collection-single.html", gin.H{
			"account": account.([]string)[0],
			"name":account.([]string)[1],
		})
	})
	r.POST("/nft",func(c*gin.Context){
		file,err :=c.FormFile("img_shop")
		if err != nil{
			fmt.Println(err)
			c.String(http.StatusBadRequest,"请求失败")
			return
		}
		fileName := file.Filename
		fmt.Println("文件名",fileName)
		if err := c.SaveUploadedFile(file,"./assets/images/shop/"+fileName); err != nil{
			c.String(http.StatusBadRequest,"保存失败 Error：%s" ,err.Error())
			return
		}

	})
	r.GET("/index", func(c *gin.Context) {
		c.HTML(200, "main/index.html", nil)
	})


	r.Run()
}
