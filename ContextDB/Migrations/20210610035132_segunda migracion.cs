using Microsoft.EntityFrameworkCore.Migrations;

namespace ContextDB.Migrations
{
    public partial class segundamigracion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ventas_Usuarios_UsuariosId",
                table: "Ventas");

            migrationBuilder.DropIndex(
                name: "IX_Ventas_UsuariosId",
                table: "Ventas");

            migrationBuilder.DropColumn(
                name: "UsuariosId",
                table: "Ventas");

            migrationBuilder.CreateIndex(
                name: "IX_Ventas_UsuarioId",
                table: "Ventas",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ventas_Usuarios_UsuarioId",
                table: "Ventas",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ventas_Usuarios_UsuarioId",
                table: "Ventas");

            migrationBuilder.DropIndex(
                name: "IX_Ventas_UsuarioId",
                table: "Ventas");

            migrationBuilder.AddColumn<int>(
                name: "UsuariosId",
                table: "Ventas",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ventas_UsuariosId",
                table: "Ventas",
                column: "UsuariosId");

            migrationBuilder.AddForeignKey(
                name: "FK_Ventas_Usuarios_UsuariosId",
                table: "Ventas",
                column: "UsuariosId",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
