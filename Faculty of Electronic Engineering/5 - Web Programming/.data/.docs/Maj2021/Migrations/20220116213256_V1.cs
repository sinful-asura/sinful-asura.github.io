using Microsoft.EntityFrameworkCore.Migrations;

namespace Maj2021.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fabrike",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fabrike", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Silosi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Oznaka = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Kapacitet = table.Column<int>(type: "int", nullable: false),
                    TrenutnaKolicina = table.Column<int>(type: "int", nullable: false),
                    FabrikaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Silosi", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Silosi_Fabrike_FabrikaID",
                        column: x => x.FabrikaID,
                        principalTable: "Fabrike",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Silosi_FabrikaID",
                table: "Silosi",
                column: "FabrikaID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Silosi");

            migrationBuilder.DropTable(
                name: "Fabrike");
        }
    }
}
