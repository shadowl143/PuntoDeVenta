using Microsoft.EntityFrameworkCore.Migrations;

namespace ContextDB.Migrations
{
    public partial class segundmigracion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_SubVentas_ProductoId",
                table: "SubVentas",
                column: "ProductoId");

            migrationBuilder.AddForeignKey(
                name: "FK_SubVentas_Productos_ProductoId",
                table: "SubVentas",
                column: "ProductoId",
                principalTable: "Productos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SubVentas_Productos_ProductoId",
                table: "SubVentas");

            migrationBuilder.DropIndex(
                name: "IX_SubVentas_ProductoId",
                table: "SubVentas");
        }
    }
}
