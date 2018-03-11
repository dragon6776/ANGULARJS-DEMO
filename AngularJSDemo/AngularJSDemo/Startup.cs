using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSDemo.Startup))]
namespace AngularJSDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
